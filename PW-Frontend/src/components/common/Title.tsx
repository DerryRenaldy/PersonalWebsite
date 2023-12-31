import styled from "styled-components";

const Title = ({ title }: { title: string }) => {
  return (
    <div className="flex justify-center mt-24">
      <TitleText className="text-center w-full uppercase text-[29px] sm:text-[48px] lg:text-[56px] text-text select-none font-rubik font-bold">
        {title}
      </TitleText>
    </div>
  );
};

const TitleText = styled.div`
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-width: 2px;

  &:hover {
    -webkit-text-fill-color: initial;
    -webkit-text-stroke-width: initial;
  }
`;

export default Title;
