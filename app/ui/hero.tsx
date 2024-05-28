import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative">
            <div className="w-full flex space-x-28">
                <div className="basis-2/3">
                    <h1 className="mb-3 pb-4 text-4xl font-bold text-white md:text-6xl">营养狮 🦁 - 您身边的营养专家</h1>
                    <p className="mb-6 max-w-[528px] text-xl text-[#aeaeae] md:mb-10">拍照就能轻松获取食物的卡路里、蛋白质、碳水化合物、脂肪等营养元素</p>

                    <div className="flex items-center">
                        <a href="#" className="] mr-5 inline-block rounded-full bg-[#c9fd02] px-6 py-4 text-center font-bold text-black transition hover:border-black hover:bg-white md:mr-6 lg:mr-8">立即尝试！</a>
                    </div>
                </div>

                <div className="basis-1/3 ">
                    <Image src={"/img/food_detail.webp"} alt="" className="mx-auto inline-block max-w-[640px] rounded-2xl object-cover" width={300} height={700} />
                </div>
            </div>
        </section>

    );
}