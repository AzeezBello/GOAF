export default function ServiceCard({title, desc, icon}:{title:string; desc:string; icon?:React.ReactNode}){
  return (
    <div className="p-6 border rounded-lg hover:shadow-lg transition">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-md bg-slate-100 flex items-center justify-center">{icon}</div>
        <h4 className="text-lg font-semibold">{title}</h4>
      </div>
      <p className="mt-4 text-slate-600 text-sm">{desc}</p>
    </div>
  )
}
