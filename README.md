# Development Challenge for THE 8 AGENCY - FRONTEND & BACKEND

Challenge based on [THE 8 AGENCY](https://www.the-8agency.com/) directives.


## DEMO API Reference

#### Get all items

```http
  GET /events/items
```
Check [getAll Events API](https://t8agency.herokuapp.com/events)

#### Get item

```http
  GET /events/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

Check [getById Events API](https://t8agency.herokuapp.com/events/631ce2476b715286d3660fae) (default event created)


## Requirements

Steps before initialization

1. Clone repository
```bash
git clone https://github.com/AgustinTafura/t8a_backend.git
```

2. Install dependencies
```bash
npm install
```

3. Set environment variables (.env file)

## Run

```bash
npm start
# or npm run dev 
# check package.json for all scripts 
```

## Testing

```bash
npm run test
```
