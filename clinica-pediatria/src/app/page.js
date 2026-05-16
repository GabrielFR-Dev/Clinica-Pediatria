import Topo from '@/componentes/topo';
import Apresentacao from '@/componentes/apresentacao';
import Rodape from '@/componentes/rodape';


export default async function Home() {
  return (
    <>
      <Topo />
      <Apresentacao />
      <Rodape/>
    </>

  );
}
