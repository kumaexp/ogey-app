import Sidebar from "../components/Sidebar";
import styles from "../styles/DefaultLayout.module.css"

export default function DefaultLayout({ children, title }) {
    return (
        <div className={`grid h-screen ${styles['custom-grid']}`}>
            <div className="col-start-1 col-span-1 row-start-1 row-span-2">
                <Sidebar title={title}></Sidebar>
            </div>
            <main className="p-4 col-start-2 col-span-1 row-start-1 row-span-1">{children}</main>
            <footer className="col-start-2 row-start-2 row-span-1 flex items-center justify-center">
                <p>&copy; Copyright 2021 | Ogey Rrat</p>
            </footer>
        </div>
    )
}