### Create a migration

Type following command

```
npm run typeorm migration:create src/shared/infra/typeorm/migrations/[Migration Name]
```

### Run migration to database

```
npm run typeorm -- -d src/shared/infra/typeorm/index.ts migration:run
```
