import { InfoListPageProps } from "./data-props";

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Home: undefined;
      AllLists: undefined;
      InfoList: InfoListPageProps;
      AddItem: undefined;
      ListHome: undefined;
      screenB: { name: string };
    }
  }
}
