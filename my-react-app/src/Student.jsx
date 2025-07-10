import PropTypes from 'prop-types'

function Student(props) {
    return (
        <div className="student">
            {/* 01. String */}
            <p>Name: {props.name}</p>
            {/* 02. INT */}
            <p>Age: {props.age}</p>
            {/* 03. Boolean */}
            <p>Student: {props.isStudent ? "Yes" : "No"}</p>
        </div>
    );
}

Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,
}
Student.defaultProps = {
    name: "Guest",
    age: 0,
    isStudent: false,
}

export default Student