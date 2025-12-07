import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface Store {
  id: number;
  name: string;
  address: string;
  city: string;
  phone: string;
  hours: string;
  coordinates: [number, number];
}

const stores: Store[] = [
  {
    id: 1,
    name: 'Sweet Smoke',
    address: 'ул. Историческая, 175',
    city: 'Волгоград',
    phone: '+7 (953) 198-40-06',
    hours: '9:00 - 21:00',
    coordinates: [48.7186, 44.5015]
  },
  {
    id: 2,
    name: 'Sweet Smoke',
    address: 'ул. Историческая, 154',
    city: 'Волгоград',
    phone: '+7 (953) 198-40-06',
    hours: '9:00 - 21:00',
    coordinates: [48.7168, 44.4987]
  },
  {
    id: 3,
    name: 'Sweet Smoke',
    address: 'ул. Савкина, 2',
    city: 'Волгоград',
    phone: '+7 (953) 198-40-06',
    hours: '9:00 - 21:00',
    coordinates: [48.7078, 44.5161]
  },
  {
    id: 4,
    name: 'Sweet Smoke',
    address: 'ул. Краснополянская, 5а',
    city: 'Волгоград',
    phone: '+7 (953) 198-40-06',
    hours: '9:00 - 21:00',
    coordinates: [48.4727, 44.5388]
  },
  {
    id: 5,
    name: 'Sweet Smoke',
    address: 'ул. Краснополянская, 26',
    city: 'Волгоград',
    phone: '+7 (953) 198-40-06',
    hours: '9:00 - 21:00',
    coordinates: [48.4692, 44.5410]
  },
  {
    id: 6,
    name: 'Sweet Smoke',
    address: 'ул. Рионская, 4б',
    city: 'Волгоград',
    phone: '+7 (953) 198-40-06',
    hours: '9:00 - 21:00',
    coordinates: [48.7302, 44.4850]
  },
  {
    id: 7,
    name: 'Sweet Smoke',
    address: 'ул. Профсоюзов, 1б',
    city: 'Волжский',
    phone: '+7 (953) 198-40-06',
    hours: '9:00 - 21:00',
    coordinates: [48.7886, 44.7643]
  }
];

const Index = () => {
  const [selectedCity, setSelectedCity] = useState<string>('all');
  const [selectedStore, setSelectedStore] = useState<Store | null>(null);

  const filteredStores = selectedCity === 'all' 
    ? stores 
    : stores.filter(store => store.city === selectedCity);

  const cities = ['all', ...Array.from(new Set(stores.map(s => s.city)))];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-foreground tracking-tight text-center">Sweet Smoke</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="mb-8 flex flex-wrap gap-2 justify-center">
          {cities.map(city => (
            <Button
              key={city}
              variant={selectedCity === city ? 'default' : 'outline'}
              onClick={() => setSelectedCity(city)}
              className="transition-all hover-scale"
            >
              {city === 'all' ? 'Все города' : city}
            </Button>
          ))}
        </div>

        <div className="space-y-3 max-w-2xl mx-auto">
          {filteredStores.map(store => (
            <Card 
              key={store.id}
              className="cursor-pointer transition-all hover:shadow-lg hover-scale"
              onClick={() => setSelectedStore(store)}
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" size={20} className="text-primary" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs px-2 py-1 bg-accent text-accent-foreground rounded-full">
                        {store.city}
                      </span>
                    </div>
                    
                    <p className="text-foreground font-medium mb-3">
                      {store.address}
                    </p>
                    
                    <Button size="sm" asChild>
                      <a 
                        href={`https://yandex.ru/maps/?rtext=~${store.coordinates[0]},${store.coordinates[1]}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Icon name="Navigation" size={14} className="mr-2" />
                        Маршрут
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>

      <footer className="border-t mt-16 py-8 bg-accent/5">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>Sweet Smoke — {stores.length} магазинов</p>
          <p className="text-sm mt-2">9:00 - 21:00</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;