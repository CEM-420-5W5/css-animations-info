"use client";

import { Button } from "@/components/ui/button";
import { CarreAvecFleche } from "@/components/CarreAvecFleche";

export default function Home() {

  const ANIMATION_DURATION_MS = 1000;

  const toutAnimerSimple = async () => {
    animerTranslateSimple();
    animerRotationSimple();
    animerScaleSimple();
    animerColorSimple();
    animerOpacitySimple();
  };

  const toutAnimer = async () => {
    await animerTranslate();
    await animerRotation();
    await animerScale();
    await animerColor();
    await animerOpacity();
  };

  
  const jouerAnimationSimple = (elementId: string, classe: string) => {
    const element = document.getElementById(elementId);
    element?.classList.add(classe);
  };

  const jouerAnimationAvecCallback = (elementId: string, classe: string, callback: () => void) => {
    const element = document.getElementById(elementId);
    if (!element) {
      return;
    }

    element.classList.add(classe);

    element.addEventListener('animationend', () => {
      element.classList.remove(classe);
      callback();
    }, { once: true });
  };

  const jouerAnimation = (elementId: string, classe: string) => {
    return new Promise<void>((resolve) => {
      const element = document.getElementById(elementId);
      if (!element) {
        resolve();
        return;
      }

      element.classList.add(classe);

      element.addEventListener('animationend', () => {
        element.classList.remove(classe);
        resolve();
      }, { once: true });
    });
  };

  const animerRotation = async () => {
    await jouerAnimation(`rotate`, `anim-rotate`);
  };

  const animerTranslate = async () => {
    await jouerAnimation(`translate`, `anim-translate`);
  };

  const animerScale = async () => {
    await jouerAnimation(`scale`, `anim-scale`);
  };

  const animerColor = async () => {
    await jouerAnimation(`color`, `anim-color`);
  };

  const animerOpacity = async () => {
    await jouerAnimation(`opacity`, `anim-opacity`);
  };

  const animerRotationSimple = async () => {
    await jouerAnimationSimple(`rotate`, `anim-rotate`);
  };

  const animerTranslateSimple = async () => {
    await jouerAnimationSimple(`translate`, `anim-translate`);
  };

  const animerScaleSimple = async () => {
    await jouerAnimationSimple(`scale`, `anim-scale`);
  };

  const animerColorSimple = async () => {
    await jouerAnimationSimple(`color`, `anim-color`);
  };

  const animerOpacitySimple = async () => {
    await jouerAnimationSimple(`opacity`, `anim-opacity`);
  };

  const animerAvecCallback = async () => {
    jouerAnimationAvecCallback(`callback`, `anim-translate`, () => {
      // La 2e animation est déclenchée dans le callback de la 1re animation
      jouerAnimationAvecCallback(`callback`, `anim-rotate`, () => {/* Rien à faire ici, juste pour montrer la séquence */});
    });
  }

  const animerAvecAwait = async () => {
    await jouerAnimation(`await`, `anim-translate`);
    await jouerAnimation(`await`, `anim-rotate`);
  };

  // La classe anim-forward utilise "forwards" pour garder l'état final
  const animerAvecFill = async () => {
    await jouerAnimation(`forward`, `anim-forward`);
  };

  return (
    <div>
      <div className="p-2">
        <h1 className="mb-8">Animations avec CSS</h1>
        <Button className="mr-2" onClick={toutAnimerSimple}>Tout Animer (Simple)</Button>
        <Button className="mr-2" onClick={toutAnimer}>Tout Animer</Button>
        <div className="flex items-center">
          <span className="w-28 text-right pr-2">Translation</span>
          <CarreAvecFleche id="translate" />
        </div>
        <div className="flex items-center">
          <span className="w-28 text-right pr-2">Rotation</span>
          <CarreAvecFleche id="rotate" />
        </div>
        <div className="flex items-center">
          <span className="w-28 text-right pr-2">Échelle</span>
          <CarreAvecFleche id="scale" />
        </div>
        <div className="flex items-center">
          <span className="w-28 text-right pr-2">Couleur</span>
          <CarreAvecFleche id="color" />
        </div>
        <div className="flex items-center">
          <span className="w-28 text-right pr-2">Opacité</span>
          <CarreAvecFleche id="opacity" />
        </div>
      </div>
      <div className="p-2">
        <Button className="mr-2" onClick={animerAvecFill}>Garder la position (forwards)</Button>
        <div className="flex items-center">
          <span className="w-28 text-right pr-2">Translation + rotation</span>
          <CarreAvecFleche id="forward" />
        </div>
      </div>

      <div className="p-2">
        <Button className="mr-2" onClick={animerAvecCallback}>Animer une séquence avec un callback</Button>
        <div className="flex items-center">
          <span className="w-28 text-right pr-2">Avec callback</span>
          <CarreAvecFleche id="callback" />
        </div>
        
      </div>

      <div className="p-2">
        <Button className="mr-2" onClick={animerAvecAwait}>Animer une séquence avec await</Button>
        <div className="flex items-center">
          <span className="w-28 text-right pr-2">Avec await</span>
          <CarreAvecFleche id="await" />
        </div>
        
      </div>

      
      
    </div>
  );
}
