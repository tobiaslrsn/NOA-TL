import axios from "axios";
//REACT
import { useEffect, useState } from "react";
//DATA
import repositoriesList from "../data/repositoriesList";
//INTERFACES
import { IRepo, repositoryDefaultValues } from "../models/IRepo";
//COMPONENTS
import { Error } from "./Error";
import { Loader } from "./Loader";
import { Counter } from "./Counter";
//STYLED-COMPONENTS
import { ThickParagraphStyle, ThinParagraphStyle } from "./styles/TextStyles";
import {
  FlexColumnContainer,
  FlexRowContainer,
  Wrapper,
} from "./styles/WrapperStyles";

export const Main = () => {
  const [repositories, setRepositories] = useState<IRepo>(
    repositoryDefaultValues
  );
  const [counter, setCounter] = useState(0);
  const [ifLoading, setIfLoading] = useState(false);
  const [ifError, setIfError] = useState(false);

  const liftCount = (counter: number) => {
    setCounter(counter);
  };

  useEffect(() => {
    setIfLoading(true);

    axios
      .get<IRepo>(`https://api.github.com/repos/${repositoriesList[counter]}`)
      .then((response) => {
        setIfLoading(false);
        setRepositories(response.data);
        setIfError(false);
        console.log(response.data);
      })
      .catch((error) => {
        setIfLoading(false);
        setIfError(true);

        console.log(error);
      });
  }, [counter]);

  return (
    <>
      <Wrapper>
        <Counter liftCount={liftCount} />

        {ifLoading ? (
          <Loader />
        ) : (
          <>
            {ifError ? (
              <Error />
            ) : (
              <FlexRowContainer>
                <FlexColumnContainer>
                  <ThickParagraphStyle>REPO:</ThickParagraphStyle>
                  <ThinParagraphStyle>
                    📁 {repositories.full_name}
                  </ThinParagraphStyle>

                  <ThickParagraphStyle>STARGAZERS:</ThickParagraphStyle>
                  <ThinParagraphStyle>
                    ⭐ {repositories.stargazers_count}
                  </ThinParagraphStyle>

                  <ThickParagraphStyle>DESCRIPTION:</ThickParagraphStyle>
                  <ThinParagraphStyle>
                    📝 {repositories.description}
                  </ThinParagraphStyle>
                </FlexColumnContainer>
              </FlexRowContainer>
            )}
          </>
        )}
      </Wrapper>
    </>
  );
};
