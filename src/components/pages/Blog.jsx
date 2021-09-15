import React from 'react'

const Blog = (props) => {
    document.title = props.nombre
    return (
        <div>
            <h1>Página de blog</h1>
        </div>
    )
}

export default Blog
