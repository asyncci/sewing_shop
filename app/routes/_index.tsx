import type { LinksFunction, MetaFunction } from "@remix-run/node";
import Catalog from "~/sections/Catalog";
import Categories from "~/sections/Categories";
import Contacts from "~/sections/Contacts";
import MainDescription from "~/sections/mainDescription";
import MiddleDescription from "~/sections/middleDescription";
import Questions from "~/sections/Questions";
import Workflow from "~/sections/Workflow";

export const meta: MetaFunction = () => {
  return [
    { title: "Швейных Цех Марата" },
    { name: "description", content: "Швейный цех на заказ" },
  ];
};

export const links: LinksFunction = () => [
];

export default function Index() {
  return (
    <div>
      <div id='main'>
          <MainDescription/>
          <MiddleDescription/>
          <Categories/>
          <Catalog/>
          <Workflow/>
          <Questions/>
          <Contacts/>
      </div>
    </div>
  );
}
