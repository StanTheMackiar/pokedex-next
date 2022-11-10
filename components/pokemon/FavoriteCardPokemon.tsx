import { Card, Grid } from "@nextui-org/react";
import { useRouter } from 'next/router';

export const FavoriteCardPokemon = ({id}: {id:number}) => {

  const router = useRouter();

  const onFavoriteClicked = () => {
    router.push(`/pokemon/${id}`)
  }


  return (

    <Grid xs={6} sm={3} md={2} xl={1} key={id}>
      <Card 
        isHoverable 
        isPressable 
        css={{ p: 10 }} 
        onClick={onFavoriteClicked}
      >
        <Card.Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
          alt={`Imagen pokemon #${id}`}
          width={"100%"}
        />
      </Card>
    </Grid>

)}

