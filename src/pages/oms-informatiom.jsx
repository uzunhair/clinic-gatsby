import React from 'react';
import { Link } from 'gatsby';

import SEO from 'components/seo';
import LayoutWidthContainer from 'components/layout/layout-with-container';

const OmsInformationPage = () => {
  return (
    <LayoutWidthContainer title="Информация по ОМС" breadcrumbActive="Информация по ОМС">
      <p>
        <a
          href="/ok/documentsazaniye_grazhdanam_RF_besplatnoj_medicinskoj_pomoshchi.pdf">
          Программа госгарантий оказания гражданам РФ бесплатной медицинской помощи
        </a>
      </p>
      <p>
        <a href="/documents/prava_i_obyazannosti_grazhdan_v_sfere_zdravoohraneniya.pdf">
          Права и обязанности граждан в сфере здравоохранения.
        </a>
      </p>
      <p>
        <a href="/documents/prava_i_obyazannosti_zastrahovannyh_lic.pdf">Права и обязанности застрахованных лиц</a>
      </p>
      <p>
        <a href="/documents/Perechen_zhiznenno_neobhodimyh_i_vazhnejshih_lekarstvennyh_preparatov_i_predelnyh_otpusknyh_cen.pdf">
          Перечень жизненно необходимых и важнейших лекарственных препаратов и предельных отпускных цен
        </a>
      </p>
      <p>
        <a href="/documents/Territorialnaya-programma.pdf">Территориальная программа</a>
      </p>
      <p>
        <a href="/documents/Order_Ministry_of_Health_Russia_ot_30_decabry_2014_g_956n.pdf">
          Приказ Минздрава России от 30 декабря 2014 г. №956н
        </a>
      </p>
      <p>
        <Link to="/perechen-uslug-okazyvaemyh-oms/">
          Перечень услуг оказываемых бесплатно по ОМС
        </Link>
      </p>
    </LayoutWidthContainer>
  );
};

export const Head = () => <SEO title="Информация по ОМС" description="Информация по ОМС" />;

export default OmsInformationPage;
