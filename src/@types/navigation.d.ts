import { InfoListPageProps } from "./data-props";

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Home: undefined;
      AllLists: undefined;
      InfoList: InfoListPageProps;
      AddItem: InfoListPageProps;
      ListHome: undefined;
      screenB: { name: string };
    }
  }
}
