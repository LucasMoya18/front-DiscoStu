import Layout from '../components/Layout'
import Pie from '../components/Pie';
import BlogCard, { BlogCardBody } from '../components/BlogCard';
import InfoBlog from '../components/InfoBlog';

function Blog(){
    document.body.classList.add('cuerpoHome');
    const blogInfo = InfoBlog();
    return(
        <>
            <Layout/>
            <div className='container'>
                {blogInfo.map((item,index)=>{
                    return (
                    <div className='justify-content-center align-content-center d-flex my-5' key={index}>
                        <BlogCard imgRoute={item.imgSrc}>
                            <BlogCardBody title={item.titulo} text={item.detalle} subtext={item.fecha}/>
                        </BlogCard>
                    </div>)
                })}
                
            </div>
            <Pie/>
        </>
        
    );
}

export default Blog;