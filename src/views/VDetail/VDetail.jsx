import { useEffect, useState } from "react";
import { DetailCard } from "../../components/cards/DetailCard";
import { Nav } from "../../components/nav/Nav";
import { DotSlider } from "../../components/reusables/DotSlider/DotSlider";
import '../VDetail/vdetail.css';

export const VDetail = ({ housing }) => {

    const [start, setStart] = useState();
    const [img, setImg] = useState();
    const [imgs, setImgs] = useState();
    const [current, setCurrent] = useState();

    useEffect(()=>{
        let s = 3;
        let ms = s* 1000;
        let timerID = setInterval(autoSlide, ms);
        return () => clearInterval(timerID)
    },[imgs, current, img])

    useEffect(() => {
        if (!housing) return;
        setImg(housing.imgUrl1);
        setImgs([housing.imgUrl1, housing.imgUrl2, housing.imgUrl3]);
    }, [housing])

    useEffect(() => {
    }, [start]);

    useEffect(() => {
        if (!imgs) return
        let index = imgs.indexOf(img);
        setCurrent(index);
    }, [imgs])

    useEffect(() => {
    }, [img, current])

    const slideImg = (e) => {
        let index;
        let end = e.changedTouches[0].clientX;
        if (Math.abs(start - end) < 75) return;
        start > end ? index = current - 1 : index = current + 1;
        if (index < 0) index = imgs.length - 1;
        if (index > imgs.length - 1) index = 0;
        setImg(imgs[index]);
        setCurrent(index);
    }

    const autoSlide = () => {
        let index = current+1;
        if (index < 0) index = imgs.length - 1;
        if (index > imgs.length - 1) index = 0;
        setImg(imgs[index]);
        setCurrent(index);
    }

    const slideOnClick = (index) =>{
        setImg(imgs[index]);
        setCurrent(index);
    }

    return (
        <div className="view detailView">
            <section onTouchStart={(e) => setStart(e.changedTouches[0].clientX)} onTouchEnd={slideImg} className="wrapper" style={{ backgroundImage: `url(${img})` }}>
                <Nav />
                <div className="dotSlider-pos"><DotSlider imgs={imgs} current={current} slide={slideOnClick}/></div>
                <DetailCard housing={housing} />
            </section>
        </div>
    );
}