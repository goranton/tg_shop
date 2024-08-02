import {
  Subheadline,
  Card,
  Badge,
  ButtonCell,
  Modal,
  Placeholder,
  Button,
} from '@telegram-apps/telegram-ui'

export default function Home() {
  const categories = [
    {
      id: 1,
      name: 'Товары для дома',
      count: 12,
      new: true,
    },
    {
      id: 2,
      name: 'Гигиена',
      count: 15,
      new: false,
    },
    {
      id: 3,
      name: 'Животные',
      count: 12,
      new: true,
    },
    {
      id: 4,
      name: 'Уход',
      count: 12,
      new: true,
    },
  ];

  const itemsByCategory = {
    1: [
      {name: 'Швабра', short: 'Краткое описание', sum: '100', currency: 'RUB'},
      {name: 'Тряпка', short: 'Краткое описание', sum: '200', currency: 'RUB'},
      {name: 'Пылесос', short: 'Краткое описание', sum: '150', currency: 'RUB'},
      {name: 'Пылесос', short: 'Краткое описание', sum: '150', currency: 'RUB'},
      {name: 'Пылесос', short: 'Краткое описание', sum: '150', currency: 'RUB'},
      {name: 'Тряпка', short: 'Краткое описание', sum: '200', currency: 'RUB'},
      {name: 'Тряпка', short: 'Краткое описание', sum: '200', currency: 'RUB'},
      {name: 'Салфетки', short: 'Краткое описание', sum: '300', currency: 'RUB'},
      {name: 'Салфетки', short: 'Краткое описание', sum: '300', currency: 'RUB'},
    ],
    2: [
      {name: 'Щетка', short: 'Краткое описание', sum: '100', currency: 'RUB'},
      {name: 'Туалетная бумага', short: 'Краткое описание', sum: '100', currency: 'RUB'},
      {name: 'Тапочки', short: 'Краткое описание', sum: '100', currency: 'RUB'},
      {name: 'Халат', short: 'Краткое описание', sum: '100', currency: 'RUB'},
      {name: 'Очки', short: 'Краткое описание', sum: '100', currency: 'RUB'},
      {name: 'Мыло', short: 'Краткое описание', sum: '100', currency: 'RUB'},
      {name: 'Зубная щетка', short: 'Краткое описание', sum: '100', currency: 'RUB'},
    ],
    3: [
      {name: 'Корм', short: 'Краткое описание', sum: '100', currency: 'RUB'},
      {name: 'Игрушка', short: 'Краткое описание', sum: '100', currency: 'RUB'},
      {name: 'Дом', short: 'Краткое описание', sum: '100', currency: 'RUB'},
      {name: 'Мяч', short: 'Краткое описание', sum: '100', currency: 'RUB'},
      {name: 'Мята', short: 'Краткое описание', sum: '100', currency: 'RUB'},
      {name: 'Массажер', short: 'Краткое описание', sum: '100', currency: 'RUB'},
      {name: 'Куртка', short: 'Краткое описание', sum: '100', currency: 'RUB'},
    ],
    4: [
      {name: 'Очищающий крем', short: 'Краткое описание', sum: '100', currency: 'RUB'},
      {name: 'Увлажняющий крем', short: 'Краткое описание', sum: '100', currency: 'RUB'},
      {name: 'Крем для бритья', short: 'Краткое описание', sum: '100', currency: 'RUB'},
      {name: 'Бальзам для волос', short: 'Краткое описание', sum: '100', currency: 'RUB'},
      {name: 'Шампунь для волос', short: 'Краткое описание', sum: '100', currency: 'RUB'},
      {name: 'Маска для лица', short: 'Краткое описание', sum: '100', currency: 'RUB'},
    ],
  };

  return (
    <div >
      {categories.map((category) => (
        <div style={{
          marginBottom: '1em',
          marginTop: '1em',
        }} key={category.id}>
          <Subheadline level={1} weight={1}>
            {category.name}

            <Badge mode="primary" type="number">
              {category.count}
            </Badge>
          </Subheadline>

          <div style={{
            whiteSpace: 'nowrap',
            overflow: 'auto',
          }}>
            {itemsByCategory[category.id].map((item) => (
              <>
                <Card style={{
                  margin: '1em',
                }} key={item.name}>
                  <Card.Chip>
                    {Intl.NumberFormat('ru-RU', {
                      style: 'currency',
                      currency: item.currency,
                    }).format(item.sum)}
                  </Card.Chip>

                  <img
                    alt="Dog"
                    src="https://i.imgur.com/892vhef.jpeg"
                    style={{
                      display: 'block',
                      height: 200,
                      objectFit: 'cover',
                      width: 254
                    }}
                  />

                  <Card.Cell
                    readOnly
                    subtitle={item.short}
                  >
                    {item.name}
                  </Card.Cell>

                  <Modal
                    header={<Modal.Header>Подробнее о товаре</Modal.Header>}
                    trigger={<ButtonCell size={'xs'}>Добавить</ButtonCell>}
                  >
                    <Placeholder
                      description="Description"
                      header={item.name}
                    >
                      <img
                        alt="Telegram sticker"
                        src="https://xelene.me/telegram.gif"
                        style={{
                          display: 'block',
                          height: '144px',
                          width: '144px'
                        }}
                      />
                    </Placeholder>
                  </Modal>
                </Card>
              </>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
