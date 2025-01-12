// sm, md, lg, xl, 2xl

export function SidebarClass1() {
    return <div className="flex">
        <div className = "transition-all ease-in-out duration-1000 md:translate-x-0 -translate-x-96 md:w-96 w-0 h-screen">
        Sidebar
        </div>
        <div className = "bg-green-800 w-full h-screen">
        Content
        </div>
    </div>
}