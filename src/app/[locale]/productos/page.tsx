import { getCatProductos } from "@/services/fetchData";
import React from "react";
import "./ProductosPage.scss";
import CallToActionBanner from "@/components/CallToActionBanner";
import ProductsShowCase from "@/sections/ProductsShowCase/ProductsShowCase";
import initTranslations from "../../i18n";

export default async function page({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const data = await getCatProductos();
  const { t } = await initTranslations(locale, ["products"]);

  const productCatArray = data.map((element:any)=>{
    const productArr = element.attributes.productos.data
    const newProdArr =  productArr.map((product:any)=>{
      const newProduct={
        id:product.id,
        title:product.attributes.titulo,
        slug:product.attributes.slug,
        cover:product.attributes.cover.data?.attributes.url,
        altCover:product.attributes.cover.data?.attributes.alternativeText
      }
      return newProduct
    })
    const newObj = {
      id:element.id,
      title:element.attributes.title,
      slug:element.attributes.slug,
      description:element.attributes.descripcion,
      products:newProdArr
    }
    return newObj
  })

  return (
    <section className="ProductsPage">
      <div className="pageTitle">
        <h1>{t('PageTitle')}</h1>
      </div>
      <div className="productCategoryGroup">
      </div>

      <ProductsShowCase productCatArray={productCatArray}/>
      <CallToActionBanner/>
    </section>
  );
}
