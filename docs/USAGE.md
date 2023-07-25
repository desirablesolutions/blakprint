<h2>🔨Usage</h2>

<h3>creating a definition of a closure.</h3>

```ts
import { define } from "blakprint";

export const myProgram = define<any, Array, Error>(() => {
  const dataCall = await useData(source);
  store.save(dataCall);
  return dataCall;
});

const programResults = myProgram.value();

```

<h3>extending semnatic view, model, or controller types.</h3>

```ts
import { ImageType, NavBarType, FooterType } from "blakprint";

export type MyImageProps = ImageType<{
  isFullscreen?: boolean;
}>;
```

---

<h3>creating semnatic view types.</h3>

```ts
import { definePage, defineComponent } from "blakprint";

const HomePage = definePage({
  metaData: {
    title: "Home",
  },
  data: {
    hero: async () => await {},
  },
});

const Header = defineComponent({
  render: (props: any, inner: any) => {
    return `<header>
                 ${inner}
               </header>`;
  },
});
```

---
