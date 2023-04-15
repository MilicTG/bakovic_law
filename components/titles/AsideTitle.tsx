interface AsideTitleProps{
    title: string,
    description: string
}

function AsideTitle (props: AsideTitleProps){
 return (
     <section className="w-full xl:w-fit px-4 pb-8 xl:pb-0 flex flex-col justify-center xl:justify-start items-center xl:items-start">

         <div className="w-20 xl:w-2/3 h-1 bg-slate-900 rounded-2xl"/>

         <h3 className="text-5xl xl:text-6xl text-primary-color font-serif font-bold my-4">
             {props.title}
         </h3>
         <p className="text-sm text-stone-700">
             {props.description}
         </p>
     </section>
 )
}

export default AsideTitle