import Sidebar from "../components/Sidebar"

const ContactsPage = () => {
  return (
    <div className='min-h-screen bg-base-200 block md:hidden'>
        <div className='flex justify-center items-center pt-20 px-4'>
            <div className='bg-base-100 rounded-lg shadow-xl w-full h-[calc(100vh-8rem)]'>
                <Sidebar />
            </div>
        </div>
    </div>
  )
}

export default ContactsPage
