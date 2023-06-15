
import Card from 'react-bootstrap/Card';
import classNames from 'classnames/bind';
import styles from './WinBlogStyles.css';
import Blog1 from '../../../assets/blog1.jpg'
import Blog2 from '../../../assets/blog2.jpg'
import Blog3 from '../../../assets/blog3.jpg'
const cx = classNames.bind(styles);



function WinningTravelBlog() {
    const Blogs = [
        {
            id : "1",
            title: "5 ways to make your bedroom feel like a 5 star hotel",
            img: Blog1,
        },
        {
            id : "2",
            title: "A Weekend Guide to Leeds: Highlights and Hidden Gems",
            img: Blog2
        },
        {
            id : "3",
            title: "The Ultimate Cruise Ship Guide to Enchanted Princess",
            img: Blog3
        }
    ]

    return (
        <div className={cx("wrapper-wining-travel-blogs")}>
            <h2 className={cx("title-wining-travel-blogs")}>Award-Winning Travel Blog est. 2013</h2>
            <div className={cx("wining-travel-blogs")}>
            {
                Blogs.map((blog, index) => (

                    <Card key={index} className={cx("card-wining-travel-blogs")}>
                    <Card.Img variant="top" src= {blog.img} />
                    <Card.Body className={cx("")}>
                        <Card.Title className={cx("card-title-blogs")}><span>{blog.title}</span></Card.Title>
                    </Card.Body>
                    </Card>
                ))
            }
            </div>
        </div>
    )
}

export default WinningTravelBlog;