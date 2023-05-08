interface AsideTitleProps{
    title: string,
}

function AsideTitle (props: AsideTitleProps){
 return (
     <section className="w-full xl:w-fit pb-8 xl:pb-0 flex flex-col justify-center xl:justify-start items-center xl:items-start">

         <div className="w-20 h-1 bg-slate-900 rounded-2xl"/>

         <h3 className="text-3xl xl:text-4xl text-primary-color font-serif font-bold my-4">
             {props.title}
         </h3>
     </section>
 )
}

export default AsideTitle