const Header = (props) => {
    return (
        <header>
            <h1>{props.title}</h1>
        </header>
    )
}

//System creates a default message if you don't write any title for Header item on app.js.
Header.defaultProps = {
    title: 'Default Message',
}

export default Header;
