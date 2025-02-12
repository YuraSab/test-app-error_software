import {useEffect, useState} from "react";
import {Product} from "@/types/Product";
import Image from "next/image";
import ImageIcon from "../../../public/images/image_icon.svg";
import {DefaultButton} from "@/ui/Buttons";
import Link from "next/link";

export default function Products() {

    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        fetch("/api/products")
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);


    return (
        <div className={"w-full min-h-screen bg-white px-8 py-4"}>
            <h4 className={"text-3xl font-bold text-blue-600 text-center"}>Products</h4>
            <ul className={"grid grid-cols-1 md:grid-cols-4 gap-4 p-4"}>
                {
                    products.map((product) => <li key={product.id}
                                                  className={"flex flex-col justify-end p-5 bg-white rounded border-2 border-r-gray-400 border-b-gray-400"}>
                        <Image
                            src={product.image} alt={"product image"}
                            width={0} height={200}
                            className={"self-center pb-4"}
                        />
                        <h2 className={"text-black font-bold"}>{product.name}</h2>
                        <p className={"text-gray-600"}>{product.price}$</p>
                        <Link href={`/products/${product.id}`}>
                            <DefaultButton text={"View details"} customStyles={"w-full"}/>
                        </Link>
                    </li>)
                }
            </ul>
        </div>
    )
}