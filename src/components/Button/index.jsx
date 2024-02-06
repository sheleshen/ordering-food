function Button(props) {
    const { title, description } = props

    const onClick = () => {
        console.log(description)
    }

    return (
        <button onClick={onClick} className="bg-slate-700 rounded-md text-sm md:text-base lg:text-lg font-semibold text-white px-3 py-2 sm:px-4 sm:py-2 md:py-3 lg:px-5 lg:py-3 xl:px-6 xl:py-3 mr-auto">
            {title}
        </button>
    )
}

export default Button;