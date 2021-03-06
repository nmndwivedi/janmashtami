const Loader = ({ visible }) => {
    let circleCommonClasses = 'h-1 w-1 bg-current rounded-full';

    return (
        <div className={`flex ${visible?'':'hidden'}`}>
            <div className={`${circleCommonClasses} mr-1 animate-bounce`}></div>
            <div
                className={`${circleCommonClasses} mr-1 animate-bounce200`}
            ></div>
            <div className={`${circleCommonClasses} animate-bounce400`}></div>
        </div>
    );
};

export default Loader;