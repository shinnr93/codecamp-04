import { Banner, Image, Wrapper } from "./Banner.styles";
import Slider from "@ant-design/react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function BannerUI() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <Banner>
      <Slider {...settings}>
        <div>
          <Wrapper>
            <Image src="/images/layout/메인2.jpeg" />
          </Wrapper>
        </div>
        <div>
          <Wrapper>
            <Image src="/images/layout/메인4.jpeg" />
          </Wrapper>
        </div>
        <div>
          <Wrapper>
            <Image src="/images/layout/메인5.jpeg" />
          </Wrapper>
        </div>
      </Slider>
    </Banner>
  );
}
