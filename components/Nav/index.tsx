import Icon from "@components/Icon";

const Nav = () => {
    return (
        <div className="min-h-56 sm:min-h-64 flex items-center shadow-md px-6 bg-black text-white">
            <div className="flex items-center justify-center">
                <Icon className="w-6" />
                <div className="text-xl sm:text-2xl font-bold ml-4">
                    Felix Yeung
                </div>
            </div>
        </div>
    );
};

export default Nav;
