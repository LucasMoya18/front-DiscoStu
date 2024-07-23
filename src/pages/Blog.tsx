import Layout from '../components/Layout'
import Pie from '../components/Pie';
import BlogCard, { BlogCardBody } from '../components/BlogCard';

function Blog(){
    document.body.classList.add('cuerpoHome');

    return(
        <>
            <Layout/>
            <div className='container'>
                <div className='justify-content-center align-content-center d-flex my-5'>
                    <BlogCard imgRoute='/src/assets/imgs/concierto.jpg'>
                        <BlogCardBody title="Publicacion 1" text="Texto" subtext='Subtexto'/>
                    </BlogCard>
                </div>
                
                <div className='justify-content-center align-content-center d-flex my-5'>
                    <BlogCard imgRoute='/src/assets/imgs/concierto.jpg'>
                        <BlogCardBody title="Publicacion 2" text="Texto" subtext='Subtexto'/>
                    </BlogCard>
                </div>
                
                <div className='justify-content-center align-content-center d-flex my-5'>
                    <BlogCard imgRoute='/src/assets/imgs/concierto.jpg'>
                        <BlogCardBody title="Publicacion 3" text="Texto" subtext='Subtexto'/>
                    </BlogCard>
                </div>
                
                <div className='justify-content-center align-content-center d-flex my-5'>
                    <BlogCard imgRoute='/src/assets/imgs/concierto.jpg'>
                        <BlogCardBody title="Publicacion 4" text="Texto" subtext='Subtexto'/>
                    </BlogCard>
                </div>
            </div>
            <Pie/>
        </>
        
    );
}

export default Blog;