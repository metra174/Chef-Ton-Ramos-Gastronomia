
import { MenuItem, CateringPackage } from './types';

export const CATERING_PACKAGES: CateringPackage[] = [
  { id: 'prata', name: 'Pacote Prata', pricePerPerson: 18000, description: 'Essencial e sofisticado para eventos íntimos.' },
  { id: 'bronze', name: 'Pacote Bronze', pricePerPerson: 22000, description: 'Variedade equilibrada de sabores tradicionais.' },
  { id: 'ouro', name: 'Pacote Ouro', pricePerPerson: 38000, description: 'A experiência gastronómica completa e luxuosa.' },
  { id: 'mao-de-obra', name: 'Só Mão de Obra', pricePerPerson: 5000, description: 'Nós cozinhamos, você fornece os ingredientes.' },
];

export const PACOTES_CUBAS: MenuItem[] = [
  { name: 'Bacalhau com natas', price: 110000 },
  { name: 'Caldeirada de cabrito', price: 95000 },
  { name: 'Calulu de carne seca', price: 120000 },
  { name: 'Arroz de pato', price: 100000 },
  { name: 'Peito alto', price: 80000 },
  { name: 'Cabidela de galinha', price: 75000 },
  { name: 'Ginguinga de cabrito', price: 90000 },
  { name: 'Cozido à Portuguesa', price: 180000 },
  { name: 'Bife à champignon com ovo estrelado', price: 130000 },
  { name: 'Lasanha', price: 95000 },
  { name: 'Peixe Corvina grelhado com legumes salteados / batata', price: 98000 },
  { name: 'Bacalhau à lagareiro', price: 160000 },
  { name: 'Bacalhau à Brás', price: 140000 },
  { name: 'Feijoada transmontana', price: 115000 },
  { name: 'Feijoada brasileira', price: 125000 },
  { name: 'Choco grelhado com molho de pimentos', price: 100000 },
  { name: 'Arroz de mariscos', price: 180000 },
  { name: 'Moqueca de garoupa e camarão', price: 140000 },
  { name: 'Medalhões de lombo', price: 155000 },
  { name: 'Grelhados mistos', price: 200000 },
  { name: 'Grelhados de galinha nacional', price: 85000 },
];

export const GUARNACOES: MenuItem[] = [
  { name: 'Kizaca de muamba crua', price: 60000 },
  { name: 'Katato', price: 65000 },
  { name: 'Trutulho', price: 50000 },
  { name: 'Feijão de óleo de palma', price: 55000 },
  { name: 'Xicuanga', price: 30000 },
  { name: 'Funge de milho', price: 25000 },
  { name: 'Funge de bombó', price: 30000 },
  { name: 'Funge misto', price: 27000 },
  { name: 'Banana pão', price: 30000 },
  { name: 'Batata doce', price: 25000 },
  { name: 'Madioca', price: 20000 },
  { name: 'Feijão preto', price: 45000 },
  { name: 'Gimboa refogada', price: 20000 },
  { name: 'Arroz basmati xau xau', price: 50000 },
  { name: 'Arroz branco', price: 35000 },
  { name: 'Salada mista', price: 25000 },
  { name: 'Salada com queijo feta', price: 35000 },
  { name: 'Salada fria de atum', price: 45000 },
  { name: 'Batata frita', price: 35000 },
  { name: 'Batata doce frita', price: 30000 },
  { name: 'Banana pão frita', price: 35000 },
  { name: 'Mandioca frita', price: 25000 },
];

export const ENTRADAS: MenuItem[] = [
  { name: 'Azeitonas ao alho', price: 30000 },
  { name: 'Pão ao alho', price: 40000 },
  { name: 'Canapés de atum', price: 70000 },
  { name: 'Canapés de queijo e fiambre', price: 60000 },
  { name: 'Canapés de camarão', price: 85000 },
  { name: 'Bruschetta de tomate Cherry, salame e pesto de manjericão', price: 78000 },
];

export const MINI_CUBAS: MenuItem[] = [
  { name: 'Bacalhau com natas', price: 60000 },
  { name: 'Caldeirada de cabrito', price: 50000 },
  { name: 'Calulu de carne seca', price: 55000 },
  { name: 'Arroz de pato', price: 50000 },
  { name: 'Ginguinga de cabrito', price: 48000 },
  { name: 'Muteta de bagre', price: 45000 },
  { name: 'Macayabo', price: 50000 },
  { name: 'Katato', price: 30000 },
  { name: 'Cozido à Portuguesa', price: 85000 },
  { name: 'Bife à Portuguesa', price: 70000 },
  { name: 'Lasanha', price: 50000 },
  { name: 'Bacalhau à lagareiro', price: 85000 },
  { name: 'Bacalhau à Brás', price: 75000 },
  { name: 'Feijoada brasileira', price: 65000 },
  { name: 'Choco grelhado com molho de pimentos', price: 60000 },
  { name: 'Arroz de mariscos', price: 90000 },
  { name: 'Moqueca de garoupa e camarão', price: 75000 },
  { name: 'Grelhados mistos', price: 100000 },
];
