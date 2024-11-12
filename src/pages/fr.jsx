import {Link} from "react-router-dom";
import styles from './styles.module.css';
import { useState } from 'react';


export default function Home() {
 
  const pageLink = "https://dofus-retrro.vercel.app/dofus/fr";

  return (
    <>
      <div className={styles.App}> 
      <div className={styles.all}> 
      <nav>
        <div className={styles.navContainer}>
          <a href=""><img width={130} height={20} src="/assets/logoHome.png" /></a>
          <p onClick={()=> Router.push("https://www.dofuspourlesnoobs.com/mise-a-jour-249.html")}>ACCEUIL</p>
          <p onClick={()=> Router.push("https://www.dofuspourlesnoobs.com/donjons.html")}>DONJONS</p>
          <p onClick={()=> Router.push("https://www.dofuspourlesnoobs.com/quecirctes.html")}>QUETES</p>
          <p onClick={()=> Router.push("https://www.dofuspourlesnoobs.com/index.html")}>TUTORIELS</p>
          <div className={styles.recherche}>
            <input type="text" placeholder='Rechercher...'/>
            <div className={styles.searchIcon}></div>
          </div>
        </div> 
      </nav>
      <div className={styles.myImg}>
      <img src="/assets/main.jpg" layout='fill' />
      </div>
      <div className={styles.navImage}>
      <div className={styles.imgsContainer}>
      <div className={styles.imgs}>
        <div className={styles.mini}>
          <a href="https://www.dofuspourlesnoobs.com/index.html"><img  src="/assets/img1.jpg"  layout='fill'/></a>
        </div>
        <div  className={styles.mini}>
        <a href="https://www.dofuspourlesnoobs.com/index.html"><img  src="/assets/img2.jpg"  layout='fill'/></a>

        </div>
        <div className={styles.mini}>
        <a href="https://www.dofuspourlesnoobs.com/index.html"><img  src="/assets/img3.jpg"  layout='fill'/></a>
        </div>
      </div>
      </div>
      </div>
      
      <center>
      <div style={{paddingTop:"50px"}} className={styles.main}>
        <div className={styles.mainContanier}>
          <div className={styles.box}>
            <center>
          <h1>BAUME MARTEGEL</h1>
          </center>
          <div className={styles.mainInfos}>
            <div className={styles.mainImgSection}>
            <img src="/assets/tour.png" />
            <br /><br />
            <p className={styles.date}>Mis en ligne le 01/09/2023.</p>
            <p className={styles.date}>Dernière mise à jour le 15/11/2023.</p>
            </div>
            <div className={styles.inline}></div>
            <div className={styles.mainrightInfos}>
              <h3>Prérequis :</h3>
              <div className={styles.pre}>
              <ul>
                <li style={{marginTop:"5px"}}>Niveau recommandé 140. </li>
                <li style={{marginTop:"5px"}}>Débloquez l'accés à partir du site officiel.</li>
                <Link className={styles.link} href={{
                  pathname:pageLink,
                }} style={{color:"red",textDecoration:"none",paddingLeft:"12px",display:"none"}} shallow>https://dofus.com/fr/mmorpg/actualites <div style={{marginLeft:"12px",marginTop:"-15px"}} className="underline"><br /></div>/news/mine-valoniale/</Link>

              </ul>
              </div>

              <div style={{display:"flex"}}>
              <h3 style={{color:"rgb(58, 150, 184)"}}>Position de lancement :</h3>
              <p style={{color:"rgb(96, 96, 96)",marginLeft:"5px"}}>[-22.-24].</p>
              </div>
              <h3 style={{color:"rgb(95, 162, 51)",marginTop:"10px"}}>Récompenses :</h3>
              <div className={styles.pre}>
              <ul>
                <li>Accés à l' Baume Martegel.</li>
              </ul>
              </div>
              <p className={styles.aPre}><span>À prévoir :</span> x1 Belladonzelle.</p>
            </div>
          </div>
 
            <br /><br />
            <div style={{display:"none"}} className={styles.texting}>

            <p className={styles.text}>Pour accéder a la Cave, il suffit de débloquer l'accès sur votre personnage à partir du site officiel de dofus.</p>
            <p className={styles.text}>Il vous faudra sélectionner à partir du site le personnage sur lequel vous souhaitez débloquer l'accès</p>
            <p className={styles.text}>Une fois l'accès débloqué sur le personnage choisis , rendez vous devant le dj pour parler au pnj</p>
            <p className={styles.text2}>La quête se termine et débloque : Accès au Cave Ereboriale .</p>
            </div>
          <br /><br />

          <div className={styles.imagesContainer}>
            <div className={styles.imagesBox}>
            <p className={styles.imgsTitle}>Après avoir débloqué l'accès , munissez vous d'une belladonzelle et dirigez vous ensuite vers la tour des voyageurs pour vous adresser au PNJ.</p>
            <div className={styles.imgsContainer}>
            <img  src="/assets/tour1.png"  layout='fill'/>
            </div>
            <p className={styles.imgsTitle} style={{fontWeight:"700"}}>Le pnj vous proposera ensuite d'accéder à la rivine.</p>
            <div className={styles.imgsContainer}>
            <img  src="/assets/baume.png"  layout='fill'/>
            </div>
            <p className={styles.imgsTitle} style={{fontWeight:"700",color:"#da4444",marginTop:"30px"}}>La quête se termine et débloque : Accès à l''Baume Martegel.</p>
            </div>
          </div>
          <h5>
            Commenter
          </h5>

          </div>
        </div>
      </div>
      </center>
      
      <footer>
        <br /><br />
        <div className={styles.first}>
          <div className={styles.footerInput}>
          <input placeholder='Chercher un donjon, une quete' type="text" />
          </div>
         <a href="">Signaler un problème.</a>
        </div>

        <div className={styles.second}>
          <div className={styles.social}>

          </div>
        </div>
        <br /><br />
        <center>
        <div className={styles.third}>
          <div className={styles.texting3}>
            <p>Dofus est un MMORPG édité par <a href="">Ankama</a>. "dofuspourlesnoobs" est un site non-officiel sans aucun lien avec Ankama.</p>
            <p>Certaines illustrations sont la propriété d'Ankama Studio et de Dofus - Tous droits réservés</p>
            <p>Copyright © 2013 - 2020 Dofus pour les Noobs - Merci de ne pas copier le contenu de ce site sans autorisation.</p>
            <p>Sites du réseau : <a href="">Dofus pour les Noobs</a> - <a href="">Dotrofus</a> - <a href="">DimTopia</a></p>
            <p><a href="">Mentions légales</a> / <a href="">Informations sur les cookies</a> / <a href="">Confidentialité / Nous contacter</a></p>

            <br />
            <p>This is the free demo result. For a full version of this website, please go to <a href="">https://www6.waybackmachinedownloader.com/website-downloader-online/scrape-all-files/</a></p>
          </div>
        </div>
        </center>
      </footer>
      </div>
    </div>
    </>
  )
}
