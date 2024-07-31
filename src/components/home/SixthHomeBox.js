import styled from "styled-components";
import img1 from "../../img/img_set/bienoh00_clean_cafe_modern_korea_brand_cafe_seoul_Hongik_Univer_72bd3d59-8395-4402-aa84-54a22d0b24c9.png";
import img2 from "../../img/img_set/bienoh00_clean_cafe_modern_korea_brand_cafe_seoul_Hongik_Univer_8274bf51-800d-488c-a4c3-6614afe27eab.png";
import img3 from "../../img/img_set/bienoh00_korea_art_museum_in_seoul_gallery_modern_clean_small_0f4cd154-7731-4778-ac09-f43ce2f0f00b.png";
import img4 from "../../img/img_set/bienoh00_korea_art_museum_in_seoul_gallery_modern_clean_small_ac821fd5-744d-40ea-b4c7-2ee64cdcf57d.png";
import img5 from "../../img/img_set/bienoh00_korea_art_museum_in_seoul_gallery_modern_clean_small_cb62ee20-5bd6-44f6-82cb-796f35aff616.png";
import img6 from "../../img/img_set/bienoh00_korea_landmark_seoul_traditinal_in_city_real_5923711d-6725-45ec-a2b5-5f22bb9e5ff9.png";
import img7 from "../../img/img_set/bienoh00_korea_landmark_seoul_traditional_8207bf03-9aaf-4510-86be-ed318dc6f951.png";
import img8 from "../../img/img_set/bienoh00_korea_movie_theater_inside_image_no_people_white_scree_17ad5847-ab9f-40fe-b372-d431ba520444.png";
import img9 from "../../img/img_set/bienoh00_korean_modern_food_restourant_in_seoul_street_fancy_br_979755ff-9e2b-4070-8602-62957c9860a1.png";
import img10 from "../../img/img_set/bienoh00_korean_modern_food_restourant_in_seoul_street_fancy_br_d7843096-1598-4652-90d3-c3c55b01ed1b.png";
import img11 from "../../img/img_set/bienoh00_korean_modern_food_restourant_in_seoul_street_fancy_br_ff4139b9-d322-46ec-8998-7bb50d1358f6.png";

const SixthContainer = styled.div`
  display: block;
  position: relative;
  z-index: 1;
  top: 2300px;
  left: 50%;
  transform: translate(-50%, 0%);
  margin: 20px auto;
  text-align: center;
`;

const SixthTopBoxContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  z-index: 1;
  left: 50%;
  margin-bottom: 16px;
  transform: translate(-50%, 0%);
  height: 428px;
  width: 100%;
  gap: 16px;
`;
const SixthBotBoxContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  z-index: 1;
  left: 50%;
  transform: translate(-50%, 0%);
  height: 428px;
  width: 100%;
  gap: 16px;
`;
const TitleFont = styled.div`
  font-size: 48px;
  text-align: center;
  letter-spacing: 2px;
  padding-bottom: 80px;
  font-weight: 600;
  color: #000000;
  width: 100%;
  position: relative;
  z-index: 1;
`;
const TopSliceBox = styled.img`
  height: 428px;
  width: 286px;
  background-color: #ddd;
`;
const BottomSliceBox = styled.img`
  height: 428px;
  width: 64px;
  background-color: #ddd;
`;
const NomalBox = styled.img`
  height: 428px;
  width: 428px;
  background-color: #ddd;
`;
function SixHomeBox() {
  return (
    <SixthContainer>
      <TitleFont>아니면 새로운 곳을 도전해보시는 건 어떤가요?</TitleFont>
      <SixthTopBoxContainer>
        <TopSliceBox src={img8} />
        <NomalBox src={img1} />
        <NomalBox src={img2} />
        <NomalBox src={img3} />
        <TopSliceBox src={img9} />
      </SixthTopBoxContainer>
      <SixthBotBoxContainer>
        <BottomSliceBox src={img10}></BottomSliceBox>
        <NomalBox src={img4} />
        <NomalBox src={img5} />
        <NomalBox src={img6} />
        <NomalBox src={img7} />
        <BottomSliceBox src={img11}></BottomSliceBox>
      </SixthBotBoxContainer>
    </SixthContainer>
  );
}

export default SixHomeBox;
