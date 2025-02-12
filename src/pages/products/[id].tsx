import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import {Product} from "@/types/Product";
import Image from "next/image";
import {DefaultButton} from "@/ui/Buttons";

export default function ProductDetail() {


    const router = useRouter();
    const { id } = router.query;
    const [product, setProduct] = useState<Product | null>(null);

    const handleBackClick = () => {
        router.back();
    }

    useEffect(() => {
        fetch("/api/products")
            .then((res) => res.json())
            .then((data) => {
                const foundProduct = data.find((el: Product) => el.id === Number(id));
                setProduct(foundProduct)
            });
    }, [id]);


    if (!product) return <p>Product not found</p>

    return (
        <div className="w-full min-h-screen bg-white flex justify-center">
            <div className={"py-6 flex flex-col"}>
                <h2 className="text-black text-4xl font-bold">{product.name}</h2>
                <Image
                    src={product.image} alt={"product image"}
                    width={0} height={400}
                    className={"self-center pb-4"}
                />
                <p className="text-black text-2xl font-bold">{product.price}$</p>
                <p className={`text-black text-2xl font-bold ${product.availability === "In Stock" ? "text-green-700" : "text-red-700"}`}>{product.availability}</p>
                <p className="text-black text-xl pt-8">{product.description}</p>
                <DefaultButton text={"← Back"} onclick={handleBackClick} customStyles={"w-fill self-center mt-8 px-14"}/>
            </div>
        </div>
    )
}