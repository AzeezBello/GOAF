export default function ContactForm(){
  return (
    <form className="grid grid-cols-1 md:grid-cols-2 gap-4" action="/api/contact" method="post">
      <input name="name" required placeholder="Full name" className="col-span-2 p-3 border rounded-md" />
      <input name="company" placeholder="Company (optional)" className="p-3 border rounded-md" />
      <input name="email" type="email" required placeholder="Email" className="p-3 border rounded-md" />
      <input name="phone" placeholder="Phone" className="p-3 border rounded-md" />
      <textarea name="message" rows={4} placeholder="Brief project details" className="col-span-2 p-3 border rounded-md" />
      <div className="col-span-2">
        <button type="submit" className="px-5 py-3 rounded-md bg-primary text-white">Send enquiry</button>
      </div>
    </form>
  )
}
