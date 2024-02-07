import { Card, CardBoxImage, CardTitle, CardsCategoryContainer } from "./style";
import { categories } from "./types/type";

export const Cards = () => {
  return (
    <CardsCategoryContainer>
      {categories.map((item) => {
        return (
          <Card key={item.id}>
            <CardBoxImage>
              <img src={item.img} />
            </CardBoxImage>
            <CardTitle>{item.title}</CardTitle>
          </Card>
        );
      })}
    </CardsCategoryContainer>
  );
};
