import PropTypes from 'prop-types'

export const FirstApp = ({ title, subTitle, name}) => {
   
    // console.log(title);

    return  (
        <>
            <h1>{title}</h1>
            {/* <code>{JSON.stringify(newMessage)}</code> */}
            <p>{subTitle}</p>
            <p>{name}</p>
        </>
        
    )
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.number.isRequired,
}

FirstApp.defaultProps = {
    name: 'Alejadnro Huertas',
    subTitle: 123,
    title: 'No hay titulo',
}