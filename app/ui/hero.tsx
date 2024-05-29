import Image from "next/image";

export default function Hero() {
    return (
        <div className="w-full p-4 mt-12 sm:flex sm:justify-center sm:p-24 sm:space-x-32 sm:items-center sm:mt-0">
            <div className="">
                <h1 className="mb-3 pb-4 text-4xl font-bold text-white md:text-6xl">营养狮 🦁 - 您身边的营养专家</h1>
                <p className="mb-6 max-w-[528px] text-xl text-[#aeaeae] md:mb-10">拍照就能轻松获取食物的卡路里、蛋白质、碳水化合物、脂肪等营养元素</p>

                <div className="flex items-center w-full sm:w-64">
                    <a href="#" className="w-full rounded-full bg-[#c9fd02] px-6 py-4 text-center font-bold text-black transition hover:border-black hover:bg-white md:mr-6 lg:mr-8">立即尝试！</a>
                </div>
            </div>

            <div className="mt-24 sm:pt-0">
                <img src={"/img/food_detail.webp"} alt="" className="rounded-xl object-cover sm:w-80 sm:h-auto sm:object-scale-down" />
            </div>
        </div>
    );
}