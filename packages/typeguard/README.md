# @kamidere/typeguard

Typeguard based on [Zod](https://github.com/colinhacks/zod) schemas

## Installation

```bash
$ npm i zod @kamidere/typeguard

# or

yarn add zod @kamidere/typeguard
```

## Usage

`create-user.dto.ts`
```ts
import { TypeGuard } from "@kamidere/typeguard"
import { z } from "zod";

export const createUserDto = z.object({
  username: z.string().min(5).max(20),
  password: z.string().min(8),
  email: z.string().email(),
});

export type createUserDto = z.infer<typeof createUserDto>;

// TypeGuard<TYPE> is required to have proper type after use of assert method.

export const createUserDtoTypeGuard: TypeGuard<createUserDto> = new TypeGuard(createUserDto);

```

`create-user.resolver.ts`
```ts
import { createUserDtoTypeGuard } from "./create-user.dto.ts"
import { userService } from "../services/user.service.ts"


export const createUserResolver = ({ data }: Context) => {
  // data?: unknown
  createUserDtoTypeGuard.assert(data);
  // data: createUserDto

  // now we can safely pass our data knowing,
  // that our required parameters are correct
  userService.create(data);

}

```

## Tests
```bash

$ cd ..
$ npm i
$ npx lerna run --scope "@kamidere/typeguard" test

```
