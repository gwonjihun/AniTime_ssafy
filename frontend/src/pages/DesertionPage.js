// import React, { useRef, useState, useEffect } from "react";
// import { css, styled } from "styled-components";
// import { HorizontalContainer } from "styled/styled";
// import Filter from "../components/Desertion/Filter";
// import Sort from "components/Desertion/Sort";
// import http from "api/commonHttp";
// // import useIntersectionObserver from "components/InfiniteScroll/useIntersectionObserver";

// export default function Desertion() {
//   const [animals, setAnimals] = useState([]);
//   const [page, setPage] = useState(0);
//   const [isLoading, setIsLoading] = useState(false);
//   const target = useRef(null);

//   const fetchData = async () => {
//     setIsLoading(true);
//     try {
//       const response = await http.get(`/api/desertion`, {
//         params: {
//           generalNo: 0,
//           kindType: 0,
//           genderType: 0,
//           sortType: 0,
//           curPageNo: page,
//         },
//       });
//       const newData = response.data;
//       setAnimals((prevData) => [...prevData, ...newData]);
//       setPage((pageNo) => pageNo + 1);
//     } catch (error) {
//       console.log("에러메시지: ", error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   // const [observe, unobserve] = useIntersectionObserver(() => {
//   //   if (!isLoading) {
//   //     fetchData();
//   //   }
//   // });

//   // useEffect(() => {
//   //   if (isLoading) {
//   //     unobserve(target.current);
//   //   } else {
//   //     observe(target.current);
//   //   }
//   // }, [isLoading]);

//   return (
//     <HorizontalContainer>
//       <ListFilterContainer>
//         <FiltersContainer>
//           <Filter></Filter>
//           <Sort></Sort>
//         </FiltersContainer>
//         <ListContainer>
//           {animals.map((animal, idx) => (
//             <AnimalImg key={idx}>
//               <DivP>
//                 <Div>
//                   <img src={animal.image} alt="AnimalImage" height="210px" />
//                 </Div>
//                 <Div2>
//                   <Span1>
//                     <img src="/icons/Eclipse 33.svg" alt="state" />
//                     <Blank></Blank>
//                     {animal.processState}
//                   </Span1>
//                   <Span2>
//                     {animal.upkind}/{animal.kind}
//                     <span>
//                       {animal.sexCd === "암컷" ? (
//                         <img src="/icons/ic_female.svg" alt="female" />
//                       ) : (
//                         <img src="/icons/ic_male.svg" alt="male" />
//                       )}
//                     </span>
//                   </Span2>
//                 </Div2>
//               </DivP>
//               <Target ref={target} />
//             </AnimalImg>
//           ))}
//         </ListContainer>
//       </ListFilterContainer>
//       <DetailViewBox>
//         <h3>상세정보창</h3>
//       </DetailViewBox>
//     </HorizontalContainer>
//   );
// }

// const ListFilterContainer = styled.div`
//   flex: 1;
//   width: 800px;
//   height: 700px;
//   margin-right: 20px;
//   padding: 20px;
// `;

// const ListContainer = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: flex-start;
//   align-content: flex-start;
//   width: 700px;
//   height: 600px;
//   padding: 10px;
//   overflow-y: scroll;
//   text-align: center;
//   border: 1px solid #ccc;
//   border-radius: 8px;
//   ${css`
//     &::-webkit-scrollbar {
//       display: none;
//     }
//   `}
// `;

// const FiltersContainer = styled.div`
//   display: flex;
//   flex-direction: row;
//   align-items: flex-end;
//   justify-content: right;
//   padding: 20px;
// `;

// const DetailViewBox = styled.div`
//   flex: 1;
//   width: 200px;
//   height: 580px;
//   padding: 20px;
//   border: 1px solid #ccc;
//   border-radius: 8px;
//   margin-top: 93px;
// `;

// const AnimalImg = styled.div`
//   width: 33.33%;
//   height: 240px;
//   margin-top: 20px;
// `;

// const Span1 = styled.span`
//   display: flex;
//   align-items: center;
//   font-size: 15px;
//   font-weight: bold;
// `;

// const Span2 = styled.span`
//   display: flex;
//   align-items: center;
//   font-size: 14px;
//   color: gray;
//   // font-weight: bold;
// `;

// const Div = styled.div`
//   align-items: center;
// `;
// const Div2 = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   padding-left: 20px;
//   padding-right: 20px;
// `;
// const DivP = styled.div`
//   align-items: center;
// `;

// const Blank = styled.span`
//   margin-right: 5px;
// `;

// const Target = styled.div`
//   width: 100%;
//   height: 30px;
// `;
