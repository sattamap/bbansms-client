import { Outlet } from "react-router-dom";



const Main = () => {
    return (
        <div>
            <div>This is main</div>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;