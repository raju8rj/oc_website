import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

// Import components
import Navbar from "../components/Navbar"; // Ensure correct path
import Homepage from "../pages/Homepage";
import AboutUs from "../pages/AboutUs";
import TestimonialsSection from "../pages/TestimonialsSection";
import ContactUs from "../pages/ContactUs";
import Services from "../pages/Services";

// Layout Component
const Layout = () => (
    <div>
        <Navbar />
        <Outlet /> {/* This renders the current page */}
    </div>
);

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />, // Wrap everything inside Layout
        children: [
            { path: '/', element: <Homepage /> },
            { path: '/about-us', element: <AboutUs /> },
            { path: '/testimonials', element: <TestimonialsSection /> },
            { path: '/contact-us', element: <ContactUs /> },
            { path: '/services', element: <Services /> },
        ],
    },
]);

const AppRouter = () => {
    return <RouterProvider router={router} />;
};

export default AppRouter;
