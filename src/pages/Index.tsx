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
    address: 'ул. Ленина, 95, ТЦ "Утюг"',
    city: 'Тула',
    phone: '+7 (953) 198-40-06',
    hours: '10:00 - 22:00',
    coordinates: [54.1961, 37.6182]
  },
  {
    id: 2,
    name: 'Sweet Smoke',
    address: 'ул. Менделеевская, 1, ТЦ "РИО"',
    city: 'Тула',
    phone: '+7 (953) 198-40-06',
    hours: '10:00 - 22:00',
    coordinates: [54.2186, 37.5889]
  },
  {
    id: 3,
    name: 'Sweet Smoke',
    address: 'Красноармейский проспект, 1, ТЦ "Макси"',
    city: 'Тула',
    phone: '+7 (953) 198-40-06',
    hours: '10:00 - 22:00',
    coordinates: [54.1936, 37.6156]
  },
  {
    id: 4,
    name: 'Sweet Smoke',
    address: 'ул. Демонстрации, 31',
    city: 'Тула',
    phone: '+7 (953) 198-40-06',
    hours: '10:00 - 22:00',
    coordinates: [54.1885, 37.6066]
  },
  {
    id: 5,
    name: 'Sweet Smoke',
    address: 'Ново-Тульская, 5/2',
    city: 'Алексин',
    phone: '+7 (953) 198-40-06',
    hours: '10:00 - 22:00',
    coordinates: [54.5082, 37.0681]
  },
  {
    id: 6,
    name: 'Sweet Smoke',
    address: 'Красной Армии, 2',
    city: 'Алексин',
    phone: '+7 (953) 198-40-06',
    hours: '10:00 - 22:00',
    coordinates: [54.5066, 37.0590]
  },
  {
    id: 7,
    name: 'Sweet Smoke',
    address: 'ул. Историческая, 175',
    city: 'Волгоград',
    phone: '+7 (953) 198-40-06',
    hours: '9:00 - 21:00',
    coordinates: [48.7194, 44.5018]
  },
  {
    id: 8,
    name: 'Sweet Smoke',
    address: 'ул. Историческая, 154',
    city: 'Волгоград',
    phone: '+7 (953) 198-40-06',
    hours: '9:00 - 21:00',
    coordinates: [48.7175, 44.4995]
  },
  {
    id: 9,
    name: 'Sweet Smoke',
    address: 'ул. Савкина, 2',
    city: 'Волгоград',
    phone: '+7 (953) 198-40-06',
    hours: '9:00 - 21:00',
    coordinates: [48.7083, 44.5167]
  },
  {
    id: 10,
    name: 'Sweet Smoke',
    address: 'ул. Краснополянская, 5а',
    city: 'Волгоград',
    phone: '+7 (953) 198-40-06',
    hours: '9:00 - 21:00',
    coordinates: [48.4733, 44.5394]
  },
  {
    id: 11,
    name: 'Sweet Smoke',
    address: 'ул. Краснополянская, 26',
    city: 'Волгоград',
    phone: '+7 (953) 198-40-06',
    hours: '9:00 - 21:00',
    coordinates: [48.4697, 44.5417]
  },
  {
    id: 12,
    name: 'Sweet Smoke',
    address: 'ул. Рионская, 4б',
    city: 'Волгоград',
    phone: '+7 (953) 198-40-06',
    hours: '9:00 - 21:00',
    coordinates: [48.7308, 44.4856]
  },
  {
    id: 13,
    name: 'Sweet Smoke',
    address: 'ул. Профсоюзов, 1б',
    city: 'Волжский',
    phone: '+7 (953) 198-40-06',
    hours: '9:00 - 21:00',
    coordinates: [48.7892, 44.7650]
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
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-foreground tracking-tight">Sweet Smoke</h1>
            <div className="flex items-center gap-2">
              <Icon name="Store" size={24} className="text-primary" />
              <span className="text-muted-foreground">Наши магазины</span>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="mb-8 flex flex-col gap-4">
          <div>
            <h2 className="text-2xl font-semibold mb-2">Найдите ближайший магазин</h2>
            <p className="text-muted-foreground">Выберите город для быстрого поиска</p>
          </div>
          
          <div className="flex flex-wrap gap-2">
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
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">
              Адреса магазинов ({filteredStores.length})
            </h3>
            
            <div className="space-y-3">
              {filteredStores.map(store => (
                <Card 
                  key={store.id}
                  className={`cursor-pointer transition-all hover:shadow-lg hover-scale ${
                    selectedStore?.id === store.id ? 'ring-2 ring-primary' : ''
                  }`}
                  onClick={() => setSelectedStore(store)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon name="MapPin" size={20} className="text-primary" />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h4 className="font-semibold text-lg">{store.name}</h4>
                          <span className="text-xs px-2 py-1 bg-accent text-accent-foreground rounded-full">
                            {store.city}
                          </span>
                        </div>
                        
                        <p className="text-muted-foreground mb-3 flex items-center gap-2">
                          <Icon name="MapPin" size={16} />
                          {store.address}
                        </p>
                        
                        <div className="flex flex-wrap gap-4 text-sm">
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Icon name="Phone" size={16} />
                            <a href={`tel:${store.phone}`} className="hover:text-primary transition-colors">
                              {store.phone}
                            </a>
                          </div>
                          
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Icon name="Clock" size={16} />
                            <span>{store.hours}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="lg:sticky lg:top-24 h-fit">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="bg-accent/20 h-[600px] flex items-center justify-center relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10" />
                  
                  <div className="relative z-10 text-center px-8">
                    <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Icon name="Map" size={40} className="text-primary" />
                    </div>
                    
                    <h3 className="text-2xl font-semibold mb-2">Интерактивная карта</h3>
                    <p className="text-muted-foreground mb-6">
                      {selectedStore 
                        ? `Выбран магазин: ${selectedStore.address}` 
                        : 'Нажмите на магазин для просмотра на карте'}
                    </p>
                    
                    {selectedStore && (
                      <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg">
                        <h4 className="font-semibold text-lg mb-2">{selectedStore.name}</h4>
                        <p className="text-sm text-muted-foreground mb-3">{selectedStore.address}</p>
                        
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center justify-center gap-2">
                            <Icon name="Phone" size={16} />
                            <span>{selectedStore.phone}</span>
                          </div>
                          <div className="flex items-center justify-center gap-2">
                            <Icon name="Clock" size={16} />
                            <span>{selectedStore.hours}</span>
                          </div>
                        </div>
                        
                        <Button className="mt-4 w-full" asChild>
                          <a 
                            href={`https://yandex.ru/maps/?ll=${selectedStore.coordinates[1]},${selectedStore.coordinates[0]}&z=16&pt=${selectedStore.coordinates[1]},${selectedStore.coordinates[0]},pm2rdm`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Icon name="Navigation" size={16} className="mr-2" />
                            Построить маршрут
                          </a>
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <footer className="border-t mt-16 py-8 bg-accent/5">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p className="flex items-center justify-center gap-2">
            <Icon name="Store" size={16} />
            Sweet Smoke — {stores.length} магазинов в Туле и Алексине
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;