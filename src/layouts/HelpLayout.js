import { NavLink, Outlet } from "react-router-dom";


export default function HelpLayout() {
  return (
    <div className="help-layout">
        <h2>Help</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>

        <nav>
            <NavLink to="faq">FAQs</NavLink>
            <NavLink to="contact">Contact Us</NavLink>
        </nav>
        <Outlet/>
    </div>
  )
}
