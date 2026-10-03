
function showSurvivors() {
  document.getElementById("survivor-section").style.display = "block";
  document.getElementById("hunter-section").style.display = "none";
}

function showHunters() {
  document.getElementById("survivor-section").style.display = "none";
  document.getElementById("hunter-section").style.display = "block";
}

document.getElementById("survivor-search").addEventListener("input", searchSurvivor);
function searchSurvivor() {
  var search = document.getElementById("survivor-search").value.toLowerCase();
  var survivors = document.getElementsByClassName("survivor-box");

  for (var i = 0; i < survivors.length; i++) {
    var name = survivors[i].getElementsByTagName("p")[0].innerHTML.toLowerCase();

    if (name.includes(search)) {
      survivors[i].style.display = "block";
    } else {
      survivors[i].style.display = "none";
    }
  }
}

document.getElementById("hunter-search").addEventListener("input", searchHunter);
function searchHunter() {
  var search = document.getElementById("hunter-search").value.toLowerCase();
  var hunters = document.getElementsByClassName("hunter-box");

  for (var i = 0; i < hunters.length; i++) {
    var name = hunters[i].getElementsByTagName("p")[0].innerHTML.toLowerCase();

    if (name.includes(search)) {
      hunters[i].style.display = "block";
    } else {
    hunters[i].style.display = "none";
    }
  }
}

// survivor
document.getElementById("luckyguy").addEventListener("click", showLuckyGuy);
function showLuckyGuy() {
 document.getElementById("survivor-image").src = "survivors/luckyguy.png";
  document.getElementById("occupation").innerHTML = "Lucky Guy";
  document.getElementById("name").innerHTML = "Name: Unknown";
  document.getElementById("role").innerHTML = "Role: Kite";
  document.getElementById("tool").innerHTML = "Tool: Lucky Parcel";
  document.getElementById("ability").innerHTML = "Lucky Guy carries a Lucky Parcel, which allows him to choose and receive a specific item that can help him during the match. He can also wish for an item when opening a chest, increasing the chance of finding the item he wants. This lets him get and use different tools depending on what he needs at the moment.";
}


document.getElementById("gardener").addEventListener("click", showGardener);
function showGardener() {
  document.getElementById("survivor-image").src = "survivors/gardener.png";
  document.getElementById("occupation").innerHTML = "Gardener";
  document.getElementById("name").innerHTML = "Name: Emma Woods";
  document.getElementById("role").innerHTML = "Role: Assist";
  document.getElementById("tool").innerHTML = "Tool: Toolkit";
  document.getElementById("ability").innerHTML = "Gardener carries a Toolbox, which allows her to dismantle Rocket Chairs around the map, making it harder for the Hunter to eliminate Survivors. She also has a protective shield at the beginning of the match that can block one Hunter attack for a short period of time.";
}

document.getElementById("doctor").addEventListener("click", showdoctor);
function showdoctor() {
  document.getElementById("survivor-image").src = "survivors/doctor.png";
  document.getElementById("occupation").innerHTML = "Doctor";
  document.getElementById("name").innerHTML = "Name: Emily Dyer";
  document.getElementById("role").innerHTML = "Role: Assist";
  document.getElementById("tool").innerHTML = "Tool: Syringe";
  document.getElementById("ability").innerHTML = "Doctor carries a Syringe that allows her to heal herself whenever she is injured. She is also especially skilled at healing other Survivors, allowing her to restore their health faster. Her healing abilities make her useful for keeping the team healthy and helping injured teammates recover during the match.";
}

document.getElementById("lawyer").addEventListener("click", showLawyer);

function showLawyer() {
  document.getElementById("survivor-image").src = "survivors/lawyer.png";
  document.getElementById("occupation").innerHTML = "Lawyer";
  document.getElementById("name").innerHTML = "Name: Freddy Riley";
  document.getElementById("role").innerHTML = "Role: Decode";
  document.getElementById("tool").innerHTML = "Tool: Map";
  document.getElementById("ability").innerHTML =
    "Lawyer carries a Map that allows him to see important locations and information around the map. He can use it to locate cipher machines, teammates, and the Hunter, helping him understand what is happening around him. His abilities also help him decode cipher machines more efficiently as the match continues.";
}

document.getElementById("thief").addEventListener("click", showThief);

function showThief() {
  document.getElementById("survivor-image").src = "survivors/thief.png";
  document.getElementById("occupation").innerHTML = "Thief";
  document.getElementById("name").innerHTML = "Name: Kreacher Pierson";
  document.getElementById("role").innerHTML = "Role: Kite";
  document.getElementById("tool").innerHTML = "Tool: Flashlight";
  document.getElementById("ability").innerHTML =
    "Thief carries a Flashlight that he can shine at the Hunter. Keeping the light on the Hunter long enough can temporarily disable their abilities and eventually stun them. This makes the Flashlight useful while kiting, as Thief can interfere with the Hunter and create more time to escape.";
}

document.getElementById("magician").addEventListener("click", showMagician);
function showMagician() {
  document.getElementById("survivor-image").src = "survivors/magician.png";
  document.getElementById("occupation").innerHTML = "Magician";
  document.getElementById("name").innerHTML = "Name: Servais Le Roy";
  document.getElementById("role").innerHTML = "Role: Kite";
  document.getElementById("tool").innerHTML = "Tool: Magic Wand";
  document.getElementById("ability").innerHTML = "Magician carries a Magic Wand that creates a decoy and makes him invisible for a short time. He also gains a movement speed boost while invisible, allowing him to quickly create distance from the Hunter. The decoy can also be used to block attacks or confuse the Hunter.";
}


document.getElementById("explorer").addEventListener("click", showExplorer);
function showExplorer() {
  document.getElementById("survivor-image").src = "survivors/explorer.png";
  document.getElementById("occupation").innerHTML = "Explorer";
  document.getElementById("name").innerHTML = "Name: Kurt Frank";
  document.getElementById("role").innerHTML = "Role: Decode";
  document.getElementById("tool").innerHTML = "Tool: Gulliver's Travels";
  document.getElementById("ability").innerHTML = "Explorer carries Gulliver's Travels, which allows him to shrink himself and become much harder for the Hunter to notice. While exploring, he can locate and dig up Password Pages hidden around the map. These pages can then be used to quickly add progress to cipher machines.";
}


document.getElementById("mercenary").addEventListener("click", showMercenary);
function showMercenary() {
  document.getElementById("survivor-image").src = "survivors/mercenary.png";
  document.getElementById("occupation").innerHTML = "Mercenary";
  document.getElementById("name").innerHTML = "Name: Naib Subedar";
  document.getElementById("role").innerHTML = "Role: Rescue";
  document.getElementById("tool").innerHTML = "Tool: Elbow Pads";
  document.getElementById("ability").innerHTML = "Mercenary carries Elbow Pads that allow him to quickly dash away after touching a wall. He is also highly resistant to damage, as injuries take longer to affect him than other Survivors. This allows him to stay active after being hit and makes him especially useful for rescuing teammates.";
}


document.getElementById("coordinator").addEventListener("click", showCoordinator);
function showCoordinator() {
  document.getElementById("survivor-image").src = "survivors/coordinator.png";
  document.getElementById("occupation").innerHTML = "Coordinator";
  document.getElementById("name").innerHTML = "Name: Martha Behamfil";
  document.getElementById("role").innerHTML = "Role: Rescue";
  document.getElementById("tool").innerHTML = "Tool: Flare Gun";
  document.getElementById("ability").innerHTML = "Coordinator carries a Flare Gun that can be fired at the Hunter to stun them for a long period of time. This can help her rescue a teammate, escape from a chase, or protect another Survivor. She is also physically trained, allowing her to vault obstacles faster than normal.";
}


document.getElementById("priestess").addEventListener("click", showPriestess);
function showPriestess() {
  document.getElementById("survivor-image").src = "survivors/priestess.png";
  document.getElementById("occupation").innerHTML = "Priestess";
  document.getElementById("name").innerHTML = "Name: Fiona Gilman";
  document.getElementById("role").innerHTML = "Role: Assist";
  document.getElementById("tool").innerHTML = "Tool: Holy Key";
  document.getElementById("ability").innerHTML = "Priestess carries a Holy Key that allows her to create passages through walls and other obstacles. Survivors can travel through these passages to quickly reach the other side, making them useful for escaping the Hunter. She can also create a long passage to connect with a distant teammate.";
}


document.getElementById("mechanic").addEventListener("click", showMechanic);
function showMechanic() {
  document.getElementById("survivor-image").src = "survivors/mechanic.png";
  document.getElementById("occupation").innerHTML = "Mechanic";
  document.getElementById("name").innerHTML = "Name: Tracy Reznik";
  document.getElementById("role").innerHTML = "Role: Decode";
  document.getElementById("tool").innerHTML = "Tool: Controller";
  document.getElementById("ability").innerHTML = "Mechanic carries a Controller that allows her to control a mechanical doll from a distance. The doll can decode cipher machines, open Exit Gates, rescue teammates, and perform other actions like a Survivor. This allows Mechanic to continue helping her team even when she is somewhere else on the map.";
}


document.getElementById("forward").addEventListener("click", showForward);
function showForward() {
  document.getElementById("survivor-image").src = "survivors/forward.png";
  document.getElementById("occupation").innerHTML = "Forward";
  document.getElementById("name").innerHTML = "Name: William Ellis";
  document.getElementById("role").innerHTML = "Role: Assist";
  document.getElementById("tool").innerHTML = "Tool: Rugby Ball";
  document.getElementById("ability").innerHTML = "Forward carries a Rugby Ball that allows him to charge forward at high speed. If he crashes into the Hunter and pushes them into an obstacle, the Hunter will be stunned. This allows him to interrupt the Hunter, protect teammates, and help Survivors escape when they are being carried.";
}


document.getElementById("mindseye").addEventListener("click", showMindsEye);
function showMindsEye() {
  document.getElementById("survivor-image").src = "survivors/mindseye.png";
  document.getElementById("occupation").innerHTML = "The Mind's Eye";
  document.getElementById("name").innerHTML = "Name: Helena Adams";
  document.getElementById("role").innerHTML = "Role: Decode";
  document.getElementById("tool").innerHTML = "Tool: Cane";
  document.getElementById("ability").innerHTML = "The Mind's Eye carries a Cane that she can strike against the ground to reveal the location of the Hunter to her teammates. She can also sense nearby objects and the Hunter through sound. Her strong decoding ability allows her to complete cipher machines much faster than most Survivors.";
}


document.getElementById("perfumer").addEventListener("click", showPerfumer);
function showPerfumer() {
  document.getElementById("survivor-image").src = "survivors/perfumer.png";
  document.getElementById("occupation").innerHTML = "Perfumer";
  document.getElementById("name").innerHTML = "Name: Vera Nair";
  document.getElementById("role").innerHTML = "Role: Kite";
  document.getElementById("tool").innerHTML = "Tool: Euphoria";
  document.getElementById("ability").innerHTML = "Perfumer carries Euphoria, which records her current health and location when she sprays it. She can activate it again within a short time to return to that previous state and position. If she is injured after using the perfume, she can Recall to remove the damage and continue escaping from the Hunter.";
}


document.getElementById("cowboy").addEventListener("click", showCowboy);
function showCowboy() {
  document.getElementById("survivor-image").src = "survivors/cowboy.png";
  document.getElementById("occupation").innerHTML = "Cowboy";
  document.getElementById("name").innerHTML = "Name: Kevin Ayuso";
  document.getElementById("role").innerHTML = "Role: Assist";
  document.getElementById("tool").innerHTML = "Tool: Lasso";
  document.getElementById("ability").innerHTML = "Cowboy carries a Lasso that allows him to pull teammates toward himself or quickly move toward them. He can also use the Lasso to rescue a Survivor being carried by the Hunter. When used correctly, it allows him to protect teammates from a distance and help them escape dangerous situations.";
}

document.getElementById("femaledancer").addEventListener("click", showFemaleDancer);
function showFemaleDancer() {
  document.getElementById("survivor-image").src = "survivors/femaledancer.png";
  document.getElementById("occupation").innerHTML = "Female Dancer";
  document.getElementById("name").innerHTML = "Name: Margaretha Zelle";
  document.getElementById("role").innerHTML = "Role: Kite";
  document.getElementById("tool").innerHTML = "Tool: Music Box";
  document.getElementById("ability").innerHTML = "Female Dancer carries Music Boxes that can change the movement and interaction speeds of characters around them. Fast Music speeds up Survivors, while Slow Music can make it harder for the Hunter to chase her. She can also perform a Pirouette to quickly move around nearby obstacles.";
}


document.getElementById("seer").addEventListener("click", showSeer);
function showSeer() {
  document.getElementById("survivor-image").src = "survivors/seer.png";
  document.getElementById("occupation").innerHTML = "Seer";
  document.getElementById("name").innerHTML = "Name: Eli Clark";
  document.getElementById("role").innerHTML = "Role: Assist";
  document.getElementById("tool").innerHTML = "Tool: Owl";
  document.getElementById("ability").innerHTML = "Seer can send his Owl to protect himself or another Survivor anywhere on the map. The Owl can block one Hunter attack, preventing the protected Survivor from taking damage. Seer can gain more Owls by watching the Hunter during a chase.";
}


document.getElementById("embalmer").addEventListener("click", showEmbalmer);
function showEmbalmer() {
  document.getElementById("survivor-image").src = "survivors/embalmer.png";
  document.getElementById("occupation").innerHTML = "Embalmer";
  document.getElementById("name").innerHTML = "Name: Aesop Carl";
  document.getElementById("role").innerHTML = "Role: Assist";
  document.getElementById("tool").innerHTML = "Tool: Makeup Box";
  document.getElementById("ability").innerHTML = "Embalmer carries a Makeup Box that allows him to summon a Coffin and record the appearance of another Survivor. A recorded Survivor can use the Coffin to return to the match after being placed on a Rocket Chair. This allows Embalmer to rescue teammates from a distance without approaching the Hunter.";
}


document.getElementById("prospector").addEventListener("click", showProspector);
function showProspector() {
  document.getElementById("survivor-image").src = "survivors/prospector.png";
  document.getElementById("occupation").innerHTML = "Prospector";
  document.getElementById("name").innerHTML = "Name: Norton Campbell";
  document.getElementById("role").innerHTML = "Role: Kite";
  document.getElementById("tool").innerHTML = "Tool: Magnet";
  document.getElementById("ability").innerHTML = "Prospector carries Magnets that can be attached to the Hunter or other Survivors. When two characters with magnets come close to each other, they can either attract or repel depending on their polarity. Prospector can use this effect to push the Hunter away, create distance, or stun them against an obstacle.";
}


document.getElementById("enchantress").addEventListener("click", showEnchantress);
function showEnchantress() {
  document.getElementById("survivor-image").src = "survivors/enchantress.png";
  document.getElementById("occupation").innerHTML = "Enchantress";
  document.getElementById("name").innerHTML = "Name: Patricia Dorval";
  document.getElementById("role").innerHTML = "Role: Kite";
  document.getElementById("tool").innerHTML = "Tool: Cursed Emblem";
  document.getElementById("ability").innerHTML = "Enchantress carries a Cursed Emblem that allows her to stun the Hunter using accumulated Guard stacks. She gains stacks while staying near the Hunter and can use one stack for a short stun or multiple stacks for a stronger stun. This can interrupt the Hunter and give her or her teammates time to escape.";
}


document.getElementById("wildling").addEventListener("click", showWildling);
function showWildling() {
  document.getElementById("survivor-image").src = "survivors/wildling.png";
  document.getElementById("occupation").innerHTML = "Wildling";
  document.getElementById("name").innerHTML = "Name: Murro";
  document.getElementById("role").innerHTML = "Role: Assist";
  document.getElementById("tool").innerHTML = "Tool: Wild Boar";
  document.getElementById("ability").innerHTML = "Wildling can ride his Wild Boar to move around the map quickly and protect himself from the Hunter. While riding, he can charge toward the Hunter and push them away. This allows him to interrupt the Hunter, protect teammates, and create more time for other Survivors to escape.";
}


document.getElementById("acrobat").addEventListener("click", showAcrobat);
function showAcrobat() {
  document.getElementById("survivor-image").src = "survivors/acrobat.png";
  document.getElementById("occupation").innerHTML = "Acrobat";
  document.getElementById("name").innerHTML = "Name: Mike Morton";
  document.getElementById("role").innerHTML = "Role: Kite";
  document.getElementById("tool").innerHTML = "Tool: Bombs";
  document.getElementById("ability").innerHTML = "Acrobat carries different Bombs that allow him to jump forward and create an area that affects the Hunter. Each type of Bomb has a different effect, such as slowing the Hunter or preventing them from using abilities. His jumps can also help him quickly cross obstacles and escape during a chase.";
}


document.getElementById("firstofficer").addEventListener("click", showFirstOfficer);
function showFirstOfficer() {
  document.getElementById("survivor-image").src = "survivors/firstofficer.png";
  document.getElementById("occupation").innerHTML = "First Officer";
  document.getElementById("name").innerHTML = "Name: Jose Baden";
  document.getElementById("role").innerHTML = "Role: Rescue";
  document.getElementById("tool").innerHTML = "Tool: Pocket Watch";
  document.getElementById("ability").innerHTML = "First Officer carries a Pocket Watch that creates an illusion and makes it difficult for the Hunter to determine his real position. This effect can help him avoid attacks while approaching a Rocket Chair or escaping from the Hunter. His abilities make him especially useful for safely rescuing teammates.";
}


document.getElementById("barmaid").addEventListener("click", showBarmaid);
function showBarmaid() {
  document.getElementById("survivor-image").src = "survivors/barmaid.png";
  document.getElementById("occupation").innerHTML = "Barmaid";
  document.getElementById("name").innerHTML = "Name: Demi Bourbon";
  document.getElementById("role").innerHTML = "Role: Assist";
  document.getElementById("tool").innerHTML = "Tool: Dovlin";
  document.getElementById("ability").innerHTML = "Barmaid can mix and carry Dovlin, a drink that gradually heals an injured Survivor after it is used. She can drink it herself or give it to an injured teammate, allowing them to recover while continuing to move. She also has a drink that temporarily increases her movement speed when she needs to escape.";
}


document.getElementById("postman").addEventListener("click", showPostman);
function showPostman() {
  document.getElementById("survivor-image").src = "survivors/postman.png";
  document.getElementById("occupation").innerHTML = "Postman";
  document.getElementById("name").innerHTML = "Name: Victor Grantz";
  document.getElementById("role").innerHTML = "Role: Assist";
  document.getElementById("tool").innerHTML = "Tool: Letters";
  document.getElementById("ability").innerHTML = "Postman can send different Letters to his teammates with the help of his Post Dog, Wick. Each type of Letter provides a different temporary benefit, such as faster decoding, movement, or rescue speed. Wick can also run toward the Hunter and slow them down, helping Postman or his teammates escape.";
}

document.getElementById("gravekeeper").addEventListener("click", showGraveKeeper);
function showGraveKeeper() {
  document.getElementById("survivor-image").src = "survivors/gravekeeper.png";
  document.getElementById("occupation").innerHTML = "Grave Keeper";
  document.getElementById("name").innerHTML = "Name: Andrew Kreiss";
  document.getElementById("role").innerHTML = "Role: Rescue";
  document.getElementById("tool").innerHTML = "Tool: Shovel";
  document.getElementById("ability").innerHTML = "Grave Keeper carries a Shovel that allows him to dig underground and move beneath the ground for a short time. While underground, he can avoid normal Hunter attacks and pass underneath certain obstacles. This makes it easier for him to approach Rocket Chairs safely and rescue teammates.";
}


document.getElementById("prisoner").addEventListener("click", showPrisoner);
function showPrisoner() {
  document.getElementById("survivor-image").src = "survivors/prisoner.png";
  document.getElementById("occupation").innerHTML = '"Prisoner"';
  document.getElementById("name").innerHTML = "Name: Luca Balsa";
  document.getElementById("role").innerHTML = "Role: Decode";
  document.getElementById("tool").innerHTML = "Tool: Electrical Circuit";
  document.getElementById("ability").innerHTML = '"Prisoner" can create a connection between two cipher machines, allowing decoding progress to be transferred from one machine to another. He can also release an electrical charge that temporarily stuns the Hunter when they are close to him. This allows him to support decoding across the map while having a way to defend himself during a chase.';
}


document.getElementById("entomologist").addEventListener("click", showEntomologist);
function showEntomologist() {
  document.getElementById("survivor-image").src = "survivors/entomologist.png";
  document.getElementById("occupation").innerHTML = "Entomologist";
  document.getElementById("name").innerHTML = "Name: Melly Plinius";
  document.getElementById("role").innerHTML = "Role: Assist";
  document.getElementById("tool").innerHTML = "Tool: Insect Net";
  document.getElementById("ability").innerHTML = "Entomologist carries an Insect Net that allows her to summon and control a swarm of insects. The swarm can push Survivors or the Hunter and can also be used to block paths and interfere with a chase. She can use the insects to protect teammates, create distance, or help herself escape.";
}


document.getElementById("painter").addEventListener("click", showPainter);
function showPainter() {
  document.getElementById("survivor-image").src = "survivors/painter.png";
  document.getElementById("occupation").innerHTML = "Painter";
  document.getElementById("name").innerHTML = "Name: Edgar Valden";
  document.getElementById("role").innerHTML = "Role: Kite";
  document.getElementById("tool").innerHTML = "Tool: Painting";
  document.getElementById("ability").innerHTML = "Painter can memorize the Hunter's appearance and use it to create a Painting. When a Painting is placed on the map, a nearby Hunter will be attracted to it and forced to look at it for a short time. This gives Painter and his teammates an opportunity to create distance or escape from the Hunter.";
}


document.getElementById("batter").addEventListener("click", showBatter);
function showBatter() {
  document.getElementById("survivor-image").src = "survivors/batter.png";
  document.getElementById("occupation").innerHTML = "Batter";
  document.getElementById("name").innerHTML = "Name: Ganji Gupta";
  document.getElementById("role").innerHTML = "Role: Assist";
  document.getElementById("tool").innerHTML = "Tool: Cricket Bat and Balls";
  document.getElementById("ability").innerHTML = "Batter carries Cricket Balls that he can hit toward the Hunter with his bat, pushing the Hunter backward when they are struck. If the Hunter is pushed into an obstacle, they can be stunned. Batter can use this ability to protect teammates, interrupt the Hunter, or help a carried Survivor escape.";
}


document.getElementById("toymerchant").addEventListener("click", showToyMerchant);
function showToyMerchant() {
  document.getElementById("survivor-image").src = "survivors/toymerchant.png";
  document.getElementById("occupation").innerHTML = "Toy Merchant";
  document.getElementById("name").innerHTML = "Name: Anne Lester";
  document.getElementById("role").innerHTML = "Role: Assist";
  document.getElementById("tool").innerHTML = "Tool: Catapult and Glider";
  document.getElementById("ability").innerHTML = "Toy Merchant carries Catapults that can launch Survivors through the air, allowing them to quickly travel across an area or escape from the Hunter. She can also use her Glider while in the air to fly over obstacles and reach distant locations. She can carry extra items and throw them to teammates who need them.";
}


document.getElementById("patient").addEventListener("click", showPatient);
function showPatient() {
  document.getElementById("survivor-image").src = "survivors/patient.png";
  document.getElementById("occupation").innerHTML = "Patient";
  document.getElementById("name").innerHTML = "Name: Emil";
  document.getElementById("role").innerHTML = "Role: Kite";
  document.getElementById("tool").innerHTML = "Tool: Hook";
  document.getElementById("ability").innerHTML = "Patient carries a Hook that allows him to pull himself toward obstacles and quickly move across the environment. He can use it to cross walls, reach higher areas, or create distance from the Hunter during a chase. His mobility allows him to escape through routes that most other Survivors cannot use.";
}


document.getElementById("psychologist").addEventListener("click", showPsychologist);
function showPsychologist() {
  document.getElementById("survivor-image").src = "survivors/psychologist.png";
  document.getElementById("occupation").innerHTML = '"Psychologist"';
  document.getElementById("name").innerHTML = "Name: Ada Mesmer";
  document.getElementById("role").innerHTML = "Role: Assist";
  document.getElementById("tool").innerHTML = "Tool: Whistle";
  document.getElementById("ability").innerHTML = '"Psychologist" can use her Whistle to remotely heal an injured teammate by transferring their damage to herself. She also begins the match with additional protection that allows her to gradually recover from part of the damage she receives. This makes her useful for supporting injured teammates even when they are far away.';
}


document.getElementById("novelist").addEventListener("click", showNovelist);
function showNovelist() {
  document.getElementById("survivor-image").src = "survivors/novelist.png";
  document.getElementById("occupation").innerHTML = "Novelist";
  document.getElementById("name").innerHTML = "Name: Orpheus";
  document.getElementById("role").innerHTML = "Role: Kite";
  document.getElementById("tool").innerHTML = "Tool: Metaphor";
  document.getElementById("ability").innerHTML = "Novelist can observe the Hunter to charge his Metaphor ability. Once charged, he can temporarily interfere with the Hunter's movement, forcing them to move in the direction he chooses. This can interrupt a chase and give Novelist or his teammates more time to escape.";
}


document.getElementById("littlegirl").addEventListener("click", showLittleGirl);
function showLittleGirl() {
  document.getElementById("survivor-image").src = "survivors/littlegirl.png";
  document.getElementById("occupation").innerHTML = '"Little Girl"';
  document.getElementById("name").innerHTML = "Name: Memory";
  document.getElementById("role").innerHTML = "Role: Assist";
  document.getElementById("tool").innerHTML = "Tool: Memory Fragment";
  document.getElementById("ability").innerHTML = '"Little Girl" carries Memory Fragments that create a shockwave when dropped, pushing nearby characters away from the center. She can use them to push the Hunter away and create distance during a chase. She can also synchronize with another Survivor and move together with them while providing support.';
}

document.getElementById("weepingclown").addEventListener("click", showWeepingClown);
function showWeepingClown() {
  document.getElementById("survivor-image").src = "survivors/weepingclown.png";
  document.getElementById("occupation").innerHTML = "Weeping Clown";
  document.getElementById("name").innerHTML = "Name: Joker";
  document.getElementById("role").innerHTML = "Role: Kite";
  document.getElementById("tool").innerHTML = "Tool: Rocket";
  document.getElementById("ability").innerHTML = "Weeping Clown carries a Rocket that allows him to quickly dash forward for a short period of time. Another Survivor can also ride on the Rocket with him, allowing both of them to escape from the Hunter together. When the Rocket explodes, it can interrupt and slow down the Hunter.";
}


document.getElementById("professor").addEventListener("click", showProfessor);
function showProfessor() {
  document.getElementById("survivor-image").src = "survivors/professor.png";
  document.getElementById("occupation").innerHTML = "Professor";
  document.getElementById("name").innerHTML = "Name: Luchino Diruse";
  document.getElementById("role").innerHTML = "Role: Kite";
  document.getElementById("tool").innerHTML = "Tool: Scales";
  document.getElementById("ability").innerHTML = "Professor can harden his scales to block an incoming Hunter attack. If the Hunter attacks the scales, the damage is blocked and the Hunter is temporarily pushed back. Professor can also leave scales around the map that other Survivors can pick up and use for protection.";
}


document.getElementById("antiquarian").addEventListener("click", showAntiquarian);
function showAntiquarian() {
  document.getElementById("survivor-image").src = "survivors/antiquarian.png";
  document.getElementById("occupation").innerHTML = "Antiquarian";
  document.getElementById("name").innerHTML = "Name: Qi Shiyi";
  document.getElementById("role").innerHTML = "Role: Assist";
  document.getElementById("tool").innerHTML = "Tool: Mechanical Flute";
  document.getElementById("ability").innerHTML = "Antiquarian carries a Mechanical Flute that she can use to strike and push the Hunter in different directions. If the Hunter is pushed into an obstacle, they will be stunned for a short time. She can also use the flute to jump and quickly move around obstacles during a chase.";
}


document.getElementById("composer").addEventListener("click", showComposer);
function showComposer() {
  document.getElementById("survivor-image").src = "survivors/composer.png";
  document.getElementById("occupation").innerHTML = "Composer";
  document.getElementById("name").innerHTML = "Name: Frederick Kreiburg";
  document.getElementById("role").innerHTML = "Role: Decode";
  document.getElementById("tool").innerHTML = "Tool: Tuning Fork";
  document.getElementById("ability").innerHTML = "Composer uses musical calibrations while decoding cipher machines, allowing him to increase his decoding speed by successfully completing them. He can also use his Tuning Fork to create a musical effect while moving. Following the rhythm correctly gives him a temporary movement speed boost to help him escape.";
}


document.getElementById("journalist").addEventListener("click", showJournalist);
function showJournalist() {
  document.getElementById("survivor-image").src = "survivors/journalist.png";
  document.getElementById("occupation").innerHTML = "Journalist";
  document.getElementById("name").innerHTML = "Name: Alice DeRoss";
  document.getElementById("role").innerHTML = "Role: Rescue";
  document.getElementById("tool").innerHTML = "Tool: Camera";
  document.getElementById("ability").innerHTML = "Journalist carries a Camera that allows her to create an illusion of her younger self. The illusion can perform certain actions, such as rescuing a teammate from a Rocket Chair or helping her during a chase. This allows Journalist to interact with the Hunter from a safer distance.";
}


document.getElementById("aeroplanist").addEventListener("click", showAeroplanist);
function showAeroplanist() {
  document.getElementById("survivor-image").src = "survivors/aeroplanist.png";
  document.getElementById("occupation").innerHTML = "Aeroplanist";
  document.getElementById("name").innerHTML = "Name: Charles Holt";
  document.getElementById("role").innerHTML = "Role: Kite";
  document.getElementById("tool").innerHTML = "Tool: Jetpack";
  document.getElementById("ability").innerHTML = "Aeroplanist carries a Jetpack that allows him to quickly propel himself in different directions. He can use it to create distance from the Hunter or move across certain obstacles during a chase. He can also hover briefly in the air, giving him additional ways to change his position.";
}


document.getElementById("cheerleader").addEventListener("click", showCheerleader);
function showCheerleader() {
  document.getElementById("survivor-image").src = "survivors/cheerleader.png";
  document.getElementById("occupation").innerHTML = "Cheerleader";
  document.getElementById("name").innerHTML = "Name: Lily Barriere";
  document.getElementById("role").innerHTML = "Role: Assist";
  document.getElementById("tool").innerHTML = "Tool: Pom-poms";
  document.getElementById("ability").innerHTML = "Cheerleader uses her Pom-poms to cheer for herself or another Survivor, providing useful boosts during a match. She can increase movement speed and help teammates reduce the cooldown of their abilities. Her encouragement can also help a teammate recover from being knocked down under certain conditions.";
}


document.getElementById("puppeteer").addEventListener("click", showPuppeteer);
function showPuppeteer() {
  document.getElementById("survivor-image").src = "survivors/puppeteer.png";
  document.getElementById("occupation").innerHTML = "Puppeteer";
  document.getElementById("name").innerHTML = "Name: Matthias Czernin";
  document.getElementById("role").innerHTML = "Role: Kite";
  document.getElementById("tool").innerHTML = "Tool: Louis";
  document.getElementById("ability").innerHTML = "Puppeteer can transform into his puppet, Louis, to resist damage from the Hunter. While transformed, an incoming attack can be absorbed without immediately knocking him down, but using the ability also affects his own health. This allows him to survive attacks and extend a chase when used carefully.";
}


document.getElementById("fireinvestigator").addEventListener("click", showFireInvestigator);
function showFireInvestigator() {
  document.getElementById("survivor-image").src = "survivors/fireinvestigator.png";
  document.getElementById("occupation").innerHTML = "Fire Investigator";
  document.getElementById("name").innerHTML = "Name: Florian Brand";
  document.getElementById("role").innerHTML = "Role: Assist";
  document.getElementById("tool").innerHTML = "Tool: Airbag";
  document.getElementById("ability").innerHTML = "Fire Investigator carries inflatable Airbags that can be placed around the map. When activated, an Airbag expands and pushes nearby characters away, allowing him to move the Hunter or help a teammate create distance. The Airbags can also be used to block or control important paths during a chase.";
}


document.getElementById("farolady").addEventListener("click", showFaroLady);
function showFaroLady() {
  document.getElementById("survivor-image").src = "survivors/farolady.png";
  document.getElementById("occupation").innerHTML = '"Faro Lady"';
  document.getElementById("name").innerHTML = "Name: Evelyn Mora";
  document.getElementById("role").innerHTML = "Role: Decode";
  document.getElementById("tool").innerHTML = "Tool: Aromatherapy Cane";
  document.getElementById("ability").innerHTML = '"Faro Lady" can become hidden when the Hunter approaches her, making it harder for the Hunter to determine her exact position. She can also use her Aromatherapy Cane to create a trail that helps confuse the Hunter while she escapes. When decoding, she can transfer progress from another cipher machine to the one she is currently working on.';
}
document.getElementById("knight").addEventListener("click", showKnight);
function showKnight() {
  document.getElementById("survivor-image").src = "survivors/knight.png";
  document.getElementById("occupation").innerHTML = '"Knight"';
  document.getElementById("name").innerHTML = "Name: Richard Sterling";
  document.getElementById("role").innerHTML = "Role: Rescue";
  document.getElementById("tool").innerHTML = "Tool: Tactical Prediction";
  document.getElementById("ability").innerHTML = '"Knight" can predict what action the Hunter will use next, such as attacking or using an ability. If his prediction is correct, he can prevent the Hunter from performing that action for a short time. This allows him to protect himself or create a safer opportunity to rescue a teammate.';
}


document.getElementById("meteorologist").addEventListener("click", showMeteorologist);
function showMeteorologist() {
  document.getElementById("survivor-image").src = "survivors/meteorologist.png";
  document.getElementById("occupation").innerHTML = "Meteorologist";
  document.getElementById("name").innerHTML = "Name: Wendy Foote";
  document.getElementById("role").innerHTML = "Role: Assist";
  document.getElementById("tool").innerHTML = "Tool: Weather Bottle";
  document.getElementById("ability").innerHTML = "Meteorologist can create different weather effects to help herself and her teammates during a match. She can use wind to push characters and change their positions, helping Survivors create distance from the Hunter. Her weather abilities can also be used to control an area and interfere with the Hunter during a chase.";
}


document.getElementById("archer").addEventListener("click", showArcher);
function showArcher() {
  document.getElementById("survivor-image").src = "survivors/archer.png";
  document.getElementById("occupation").innerHTML = "Archer";
  document.getElementById("name").innerHTML = "Name: Brynhildr Vilulf";
  document.getElementById("role").innerHTML = "Role: Kite";
  document.getElementById("tool").innerHTML = "Tool: Bow and Arrow";
  document.getElementById("ability").innerHTML = "Archer carries a Bow that allows her to fire arrows at the Hunter from a distance. Her arrows can interfere with the Hunter and help her create more space during a chase. She can use her ranged attacks to protect herself and make it harder for the Hunter to continue pursuing her.";
}


document.getElementById("escapologist").addEventListener("click", showEscapologist);
function showEscapologist() {
  document.getElementById("survivor-image").src = "survivors/escapologist.png";
  document.getElementById("occupation").innerHTML = '"Escapologist"';
  document.getElementById("name").innerHTML = "Name: Efron Weisz";
  document.getElementById("role").innerHTML = "Role: Kite";
  document.getElementById("tool").innerHTML = "Tool: Thurible";
  document.getElementById("ability").innerHTML = '"Escapologist" carries a Thurible that creates a large smokescreen when thrown. Survivors inside or near the smoke are harder for the Hunter to detect, while the smoke can also block certain Hunter projectiles and targeting abilities. He can use the smokescreen to hide his movement and escape during a chase.';
}

document.getElementById("matador").addEventListener("click", showMatador);
function showMatador() {
  document.getElementById("survivor-image").src = "survivors/matador.png";
  document.getElementById("occupation").innerHTML = "Matador";
  document.getElementById("name").innerHTML = "Name: ???";
  document.getElementById("role").innerHTML = "Role: Kite";
  document.getElementById("tool").innerHTML = "Tool: Muleta";
  document.getElementById("ability").innerHTML = "Matador uses his Muleta to confront and distract the Hunter during a chase. He can perform a Cleave that affects the Hunter and slows their movement, helping him create more distance. By using his Muleta successfully during a chase, he can build Courage and continue using his abilities to avoid the Hunter.";
}


document.getElementById("prodigy").addEventListener("click", showProdigy);
function showProdigy() {
  document.getElementById("survivor-image").src = "survivors/prodigy.png";
  document.getElementById("occupation").innerHTML = '"Prodigy"';
  document.getElementById("name").innerHTML = "Name: ???";
  document.getElementById("role").innerHTML = "Role: Kite";
  document.getElementById("tool").innerHTML = "Tool: Hamster";
  document.getElementById("ability").innerHTML = '"Prodigy" can work with his hamster to create a large dirtball and roll on it to quickly move around the map. The dirtball can travel over pallets, through windows, and off high areas while also protecting him from certain Hunter attacks. He can jump off whenever he wants, giving him another way to escape during a chase.';
}

// Hunter
document.getElementById("hellember").addEventListener("click", showhellember);
function showhellember() {
  document.getElementById("hunter-image").src = "hunters/hellember.png";
  document.getElementById("h-occupation").innerHTML = "Hell Ember";
  document.getElementById("h-name").innerHTML = "Name: Leo Beck";
  document.getElementById("h-type").innerHTML = "Type: Guard";
  document.getElementById("h-weapon").innerHTML = "Weapon: Shark Mace";
  document.getElementById("h-ability").innerHTML = "Hell Ember can summon Phantoms and control Puppets to chase and attack Survivors. His Puppets can detect nearby Survivors, and he can switch places with them to quickly move around the map. He can also awaken his Puppets, allowing them to move and chase Survivors on their own.";
}
document.getElementById("ripper").addEventListener("click", showripper);
function showripper() {
  document.getElementById("hunter-image").src = "hunters/ripper.png";
  document.getElementById("h-occupation").innerHTML = "The Ripper";
  document.getElementById("h-name").innerHTML = "Name: Jack";
  document.getElementById("h-type").innerHTML = "Type: Chase";
  document.getElementById("h-weapon").innerHTML = "Weapon: Claw";
  document.getElementById("h-ability").innerHTML = "The Ripper can become invisible after avoiding actions for a period of time, which also increases his movement speed. He can launch a Foggy Blade when attacking, allowing him to damage Survivors from a distance. This helps him quickly catch up to Survivors during a chase.";
}


document.getElementById("smileyface").addEventListener("click", showsmileyface);
function showsmileyface() {
  document.getElementById("hunter-image").src = "hunters/smileyface.png";
  document.getElementById("h-occupation").innerHTML = "Smiley Face";
  document.getElementById("h-name").innerHTML = "Name: Joker";
  document.getElementById("h-type").innerHTML = "Type: Chase";
  document.getElementById("h-weapon").innerHTML = "Weapon: Rocket";
  document.getElementById("h-ability").innerHTML = "Smiley Face can use his Rocket to dash forward at high speed and hit Survivors. He can collect different parts around the map and attach them to his Rocket to improve its abilities. These parts can increase his speed, reduce recovery time, or slow Survivors after they are hit.";
}


document.getElementById("gamekeeper").addEventListener("click", showgamekeeper);
function showgamekeeper() {
  document.getElementById("hunter-image").src = "hunters/gamekeeper.png";
  document.getElementById("h-occupation").innerHTML = "Gamekeeper";
  document.getElementById("h-name").innerHTML = "Name: Bane Perez";
  document.getElementById("h-type").innerHTML = "Type: Chase";
  document.getElementById("h-weapon").innerHTML = "Weapon: Chain Hook";
  document.getElementById("h-ability").innerHTML = "Gamekeeper can throw a Chain Hook to catch Survivors and pull them toward himself. His hook can also pull him toward certain obstacles, allowing him to move quickly during a chase. He can place traps on the ground that stop Survivors who step on them.";
}


document.getElementById("feaster").addEventListener("click", showfeaster);
function showfeaster() {
  document.getElementById("hunter-image").src = "hunters/feaster.png";
  document.getElementById("h-occupation").innerHTML = "The Feaster";
  document.getElementById("h-name").innerHTML = "Name: Hastur";
  document.getElementById("h-type").innerHTML = "Type: Guard";
  document.getElementById("h-weapon").innerHTML = "Weapon: Tentacle";
  document.getElementById("h-ability").innerHTML = "The Feaster can summon Tentacles around the map and command them to attack nearby Survivors. Tentacles can appear near important areas and Survivors, making them especially useful around Rocket Chairs. He can use multiple Tentacles to pressure Survivors and make rescuing more difficult.";
}


document.getElementById("geisha").addEventListener("click", showgeisha);
function showgeisha() {
  document.getElementById("hunter-image").src = "hunters/geisha.png";
  document.getElementById("h-occupation").innerHTML = "Geisha";
  document.getElementById("h-name").innerHTML = "Name: Michiko";
  document.getElementById("h-type").innerHTML = "Type: Chase";
  document.getElementById("h-weapon").innerHTML = "Weapon: Fan";
  document.getElementById("h-ability").innerHTML = "Geisha can place Swallowtail Butterflies around the map and quickly dash toward them or Survivors carrying them. This allows her to rapidly close the distance during a chase. Survivors can look directly at her to interrupt certain dashes, so she relies on positioning and quick movement.";
}


document.getElementById("soulweaver").addEventListener("click", showsoulweaver);
function showsoulweaver() {
  document.getElementById("hunter-image").src = "hunters/soulweaver.png";
  document.getElementById("h-occupation").innerHTML = "Soul Weaver";
  document.getElementById("h-name").innerHTML = "Name: Violetta";
  document.getElementById("h-type").innerHTML = "Type: Chase";
  document.getElementById("h-weapon").innerHTML = "Weapon: Spider Legs";
  document.getElementById("h-ability").innerHTML = "Soul Weaver can create webs between objects and gains a movement speed boost whenever she passes through them. She can also shoot webs at Survivors to slow them down and reveal their position. Her webs allow her to move quickly through an area and make escaping from her more difficult.";
}


document.getElementById("wuchang").addEventListener("click", showwuchang);
function showwuchang() {
  document.getElementById("hunter-image").src = "hunters/wuchang.png";
  document.getElementById("h-occupation").innerHTML = "Wu Chang";
  document.getElementById("h-name").innerHTML = "Name: Xie Bi'an & Fan Wujiu";
  document.getElementById("h-type").innerHTML = "Type: Control";
  document.getElementById("h-weapon").innerHTML = "Weapon: Umbrella";
  document.getElementById("h-ability").innerHTML = "Wu Chang can throw his Umbrella to teleport across the map and switch between White Guard and Black Guard. Each form has different abilities that interfere with Survivors and make escaping more difficult. His teleport also allows him to quickly pressure different areas of the map.";
}


document.getElementById("photographer").addEventListener("click", showphotographer);
function showphotographer() {
  document.getElementById("hunter-image").src = "hunters/photographer.png";
  document.getElementById("h-occupation").innerHTML = "Photographer";
  document.getElementById("h-name").innerHTML = "Name: Joseph Desaulniers";
  document.getElementById("h-type").innerHTML = "Type: Control";
  document.getElementById("h-weapon").innerHTML = "Weapon: Sword";
  document.getElementById("h-ability").innerHTML = "Photographer can use cameras to create a Photo World that contains copies of all Survivors and the map. Damage dealt to Survivors inside the Photo World is partially transferred to their real bodies when it ends. He can also move between the Photo World and the real world to surprise Survivors.";
}


document.getElementById("madeyes").addEventListener("click", showmadeyes);
function showmadeyes() {
  document.getElementById("hunter-image").src = "hunters/madeyes.png";
  document.getElementById("h-occupation").innerHTML = "Mad Eyes";
  document.getElementById("h-name").innerHTML = "Name: Burke Lapadura";
  document.getElementById("h-type").innerHTML = "Type: Control";
  document.getElementById("h-weapon").innerHTML = "Weapon: Hammer";
  document.getElementById("h-ability").innerHTML = "Mad Eyes can use consoles around the map to control surveillance devices and create temporary walls. These walls can block paths and damage Survivors when they rise beneath them. This allows him to control important areas and pressure Survivors from far away.";
}


document.getElementById("dreamwitch").addEventListener("click", showdreamwitch);
function showdreamwitch() {
  document.getElementById("hunter-image").src = "hunters/dreamwitch.png";
  document.getElementById("h-occupation").innerHTML = "Dream Witch";
  document.getElementById("h-name").innerHTML = "Name: Yidhra";
  document.getElementById("h-type").innerHTML = "Type: Control";
  document.getElementById("h-weapon").innerHTML = "Weapon: Followers";
  document.getElementById("h-ability").innerHTML = "Dream Witch herself is invisible to Survivors and controls Followers to attack them instead. She can create additional Followers by placing Leech Marks on Survivors and switch control between them around the map. This allows her to pressure several locations and Survivors at the same time.";
}


document.getElementById("evilreptilian").addEventListener("click", showevilreptilian);
function showevilreptilian() {
  document.getElementById("hunter-image").src = "hunters/evilreptilian.png";
  document.getElementById("h-occupation").innerHTML = "Evil Reptilian";
  document.getElementById("h-name").innerHTML = "Name: Luchino Diruse";
  document.getElementById("h-type").innerHTML = "Type: Chase";
  document.getElementById("h-weapon").innerHTML = "Weapon: Blade";
  document.getElementById("h-ability").innerHTML = "Evil Reptilian can leap high into the air and jump across obstacles while chasing Survivors. He can crash down onto the ground to damage Survivors in the area below him. His jumping abilities allow him to quickly cross terrain and attack from unexpected directions.";
}


document.getElementById("axeboy").addEventListener("click", showaxeboy);
function showaxeboy() {
  document.getElementById("hunter-image").src = "hunters/axeboy.png";
  document.getElementById("h-occupation").innerHTML = "Axe Boy";
  document.getElementById("h-name").innerHTML = "Name: Robbie White";
  document.getElementById("h-type").innerHTML = "Type: Chase";
  document.getElementById("h-weapon").innerHTML = "Weapon: Axe";
  document.getElementById("h-ability").innerHTML = "Axe Boy controls wandering Souls around Pine Trees and can pull them toward himself. A Soul can damage Survivors caught in its path while giving Axe Boy a movement speed boost. He can also create Restful Roads that help him move faster while chasing Survivors.";
}


document.getElementById("bloodyqueen").addEventListener("click", showbloodyqueen);
function showbloodyqueen() {
  document.getElementById("hunter-image").src = "hunters/bloodyqueen.png";
  document.getElementById("h-occupation").innerHTML = "Bloody Queen";
  document.getElementById("h-name").innerHTML = "Name: Mary";
  document.getElementById("h-type").innerHTML = "Type: Chase";
  document.getElementById("h-weapon").innerHTML = "Weapon: Mirror Shard";
  document.getElementById("h-ability").innerHTML = "Bloody Queen can place a Mirror that creates a reflection of herself on the opposite side. Her mirror image copies her movement and attacks, allowing her to hit Survivors from a distance or through obstacles. She can also switch places with the reflection to quickly change her position.";
}


document.getElementById("guard26").addEventListener("click", showguard26);
function showguard26() {
  document.getElementById("hunter-image").src = "hunters/guard26.png";
  document.getElementById("h-occupation").innerHTML = "Guard 26";
  document.getElementById("h-name").innerHTML = "Name: Bonbon";
  document.getElementById("h-type").innerHTML = "Type: Guard";
  document.getElementById("h-weapon").innerHTML = "Weapon: Bombs";
  document.getElementById("h-ability").innerHTML = "Guard 26 can place Bombs that explode after a short delay and damage nearby Survivors. Bombs can trigger each other in a chain, allowing him to cover a large area with explosions. This makes it extremely difficult for Survivors to safely approach and rescue from a Rocket Chair.";
}


document.getElementById("disciple").addEventListener("click", showdisciple);
function showdisciple() {
  document.getElementById("hunter-image").src = "hunters/disciple.png";
  document.getElementById("h-occupation").innerHTML = '"Disciple"';
  document.getElementById("h-name").innerHTML = "Name: Ann";
  document.getElementById("h-type").innerHTML = "Type: Guard";
  document.getElementById("h-weapon").innerHTML = "Weapon: Cross";
  document.getElementById("h-ability").innerHTML = '"Disciple" can release her Cat toward Survivors and attach it to them. She can then dash toward the Cat and create an area that temporarily stuns affected Survivors. This allows her to stop rescues, interrupt actions, and quickly close the distance during a chase.';
}


document.getElementById("violinist").addEventListener("click", showviolinist);
function showviolinist() {
  document.getElementById("hunter-image").src = "hunters/violinist.png";
  document.getElementById("h-occupation").innerHTML = "Violinist";
  document.getElementById("h-name").innerHTML = "Name: Antonio";
  document.getElementById("h-type").innerHTML = "Type: Chase";
  document.getElementById("h-weapon").innerHTML = "Weapon: Violin Bow";
  document.getElementById("h-ability").innerHTML = "Violinist can create Demon Notes and connect them with strings that damage Survivors who touch them. Survivors affected by his music receive movement and interaction penalties. He can also create multiple strings at once to attack Survivors from a distance and control their escape routes.";
}


document.getElementById("sculptor").addEventListener("click", showsculptor);
function showsculptor() {
  document.getElementById("hunter-image").src = "hunters/sculptor.png";
  document.getElementById("h-occupation").innerHTML = "Sculptor";
  document.getElementById("h-name").innerHTML = "Name: Galatea";
  document.getElementById("h-type").innerHTML = "Type: Guard";
  document.getElementById("h-weapon").innerHTML = "Weapon: Sculpting Chisel";
  document.getElementById("h-ability").innerHTML = "Sculptor can summon moving Statues that push Survivors and deal damage when they are crushed against an obstacle. She can create Statues from different directions to trap Survivors or force them away from certain areas. Her abilities are especially useful for controlling the area around a Rocket Chair.";
}


document.getElementById("undead").addEventListener("click", showundead);
function showundead() {
  document.getElementById("hunter-image").src = "hunters/undead.png";
  document.getElementById("h-occupation").innerHTML = '"Undead"';
  document.getElementById("h-name").innerHTML = "Name: Percy";
  document.getElementById("h-type").innerHTML = "Type: Chase";
  document.getElementById("h-weapon").innerHTML = "Weapon: Greatsword";
  document.getElementById("h-ability").innerHTML = '"Undead" does not place Survivors on Rocket Chairs and instead eliminates them by leaving them incapacitated on the ground. He can charge forward and perform powerful attacks while building Energy. At high Energy, some of his abilities become harder for Survivors to interrupt.';
}


document.getElementById("breakingwheel").addEventListener("click", showbreakingwheel);
function showbreakingwheel() {
  document.getElementById("hunter-image").src = "hunters/breakingwheel.png";
  document.getElementById("h-occupation").innerHTML = "The Breaking Wheel";
  document.getElementById("h-name").innerHTML = "Name: The Will Brothers";
  document.getElementById("h-type").innerHTML = "Type: Chase";
  document.getElementById("h-weapon").innerHTML = "Weapon: Spiked Wheel";
  document.getElementById("h-ability").innerHTML = "The Breaking Wheel can transform into a large wheel and roll around the map at very high speed. Running into Survivors places Spikes on them instead of immediately dealing damage. After returning to normal form, the brothers can trigger these Spikes to damage Survivors.";
}


document.getElementById("naiad").addEventListener("click", shownaiad);
function shownaiad() {
  document.getElementById("hunter-image").src = "hunters/naiad.png";
  document.getElementById("h-occupation").innerHTML = "Naiad";
  document.getElementById("h-name").innerHTML = "Name: Grace";
  document.getElementById("h-type").innerHTML = "Type: Control";
  document.getElementById("h-weapon").innerHTML = "Weapon: Harpoon";
  document.getElementById("h-ability").innerHTML = "Naiad can throw her Harpoon and move quickly while separated from it, leaving trails of water behind her. When the trails form a closed area, Survivors inside gain Humidity until they take damage. She can use these water zones to block escape routes and control large areas.";
}


document.getElementById("waxartist").addEventListener("click", showwaxartist);
function showwaxartist() {
  document.getElementById("hunter-image").src = "hunters/waxartist.png";
  document.getElementById("h-occupation").innerHTML = "Wax Artist";
  document.getElementById("h-name").innerHTML = "Name: Philippe";
  document.getElementById("h-type").innerHTML = "Type: Chase";
  document.getElementById("h-weapon").innerHTML = "Weapon: Wax Sprayer";
  document.getElementById("h-ability").innerHTML = "Wax Artist can shoot wax at Survivors from a distance, gradually covering them and slowing their movement and interactions. When enough wax builds up, the Survivor becomes unable to move for a short time. He can later use hot wax to damage Survivors who have been covered.";
}


document.getElementById("nightmare").addEventListener("click", shownightmare);
function shownightmare() {
  document.getElementById("hunter-image").src = "hunters/nightmare.png";
  document.getElementById("h-occupation").innerHTML = '"Nightmare"';
  document.getElementById("h-name").innerHTML = "Name: Orpheus";
  document.getElementById("h-type").innerHTML = "Type: Chase";
  document.getElementById("h-weapon").innerHTML = "Weapon: Raven Claw";
  document.getElementById("h-ability").innerHTML = '"Nightmare" can lock onto a Survivor and perform a fast diving attack toward them. He can also send Ravens to watch cipher machines, Exit Gates, and Survivors around the map. He can teleport to a Raven to quickly pressure distant locations.';
}


document.getElementById("clerk").addEventListener("click", showclerk);
function showclerk() {
  document.getElementById("hunter-image").src = "hunters/clerk.png";
  document.getElementById("h-occupation").innerHTML = "Clerk";
  document.getElementById("h-name").innerHTML = "Name: Keigan Nicholas Keogh";
  document.getElementById("h-type").innerHTML = "Type: Control";
  document.getElementById("h-weapon").innerHTML = "Weapon: Record";
  document.getElementById("h-ability").innerHTML = "Clerk can record actions performed by Survivors or herself and replay those recordings later. Recorded actions can affect cipher machines, pallets, windows, and other objects around the map. She can use these recordings to interrupt decoding, block Survivor actions, and control important areas from a distance.";
}


document.getElementById("hermit").addEventListener("click", showhermit);
function showhermit() {
  document.getElementById("hunter-image").src = "hunters/hermit.png";
  document.getElementById("h-occupation").innerHTML = "Hermit";
  document.getElementById("h-name").innerHTML = "Name: Alva Lorenz";
  document.getElementById("h-type").innerHTML = "Type: Control";
  document.getElementById("h-weapon").innerHTML = "Weapon: Staff";
  document.getElementById("h-ability").innerHTML = "Hermit can connect cipher machines together, causing decoding progress to be shared between them. He can shoot electrical charges that give Survivors positive or negative polarity and stun Survivors when opposite charges meet. Damage can also be shared between Survivors with the same polarity.";
}


document.getElementById("nightwatch").addEventListener("click", shownightwatch);
function shownightwatch() {
  document.getElementById("hunter-image").src = "hunters/nightwatch.png";
  document.getElementById("h-occupation").innerHTML = "Night Watch";
  document.getElementById("h-name").innerHTML = "Name: Ithaqua";
  document.getElementById("h-type").innerHTML = "Type: Chase";
  document.getElementById("h-weapon").innerHTML = "Weapon: Ice Axe";
  document.getElementById("h-ability").innerHTML = "Night Watch can control powerful wind to pull Survivors toward himself and make it harder for them to escape. He can store Windforce and use it to gain a large movement speed boost during a chase. His wind abilities allow him to quickly catch up to Survivors and control their movement.";
}


document.getElementById("operasinger").addEventListener("click", showoperasinger);
function showoperasinger() {
  document.getElementById("hunter-image").src = "hunters/operasinger.png";
  document.getElementById("h-occupation").innerHTML = "Opera Singer";
  document.getElementById("h-name").innerHTML = "Name: Sangria";
  document.getElementById("h-type").innerHTML = "Type: Chase";
  document.getElementById("h-weapon").innerHTML = "Weapon: Broken Mask";
  document.getElementById("h-ability").innerHTML = "Opera Singer can enter Shadow Realms created by nearby obstacles and rapidly leap between them. Moving through different Shadow Realms gives her powerful mobility and allows her to quickly catch up to Survivors. She can also leave a Remnant behind and return to it to reposition during a chase.";
}


document.getElementById("foolsgold").addEventListener("click", showfoolsgold);
function showfoolsgold() {
  document.getElementById("hunter-image").src = "hunters/foolsgold.png";
  document.getElementById("h-occupation").innerHTML = "\"Fool's Gold\"";
  document.getElementById("h-name").innerHTML = "Name: Norton Campbell";
  document.getElementById("h-type").innerHTML = "Type: Control";
  document.getElementById("h-weapon").innerHTML = "Weapon: Magnetic Pickaxe";
  document.getElementById("h-ability").innerHTML = "\"Fool's Gold\" can throw his Magnetic Pickaxe into obstacles to create unstable areas around them. These areas can trigger collapses that damage nearby Survivors. He can also pull himself toward his Pickaxe, allowing him to quickly reposition while controlling important areas.";
}


document.getElementById("shadow").addEventListener("click", showshadow);
function showshadow() {
  document.getElementById("hunter-image").src = "hunters/shadow.png";
  document.getElementById("h-occupation").innerHTML = "The Shadow";
  document.getElementById("h-name").innerHTML = "Name: Ivy Lawson";
  document.getElementById("h-type").innerHTML = "Type: Control";
  document.getElementById("h-weapon").innerHTML = "Weapon: Stone Pole";
  document.getElementById("h-ability").innerHTML = "The Shadow can increase a Survivor's Corruption when they look at her face. She can control the Yithian to watch Survivors and spread Corruption from different locations. She can also create Corrupted Ostracons and teleport to them, giving her strong control across the map.";
}


document.getElementById("goatman").addEventListener("click", showgoatman);
function showgoatman() {
  document.getElementById("hunter-image").src = "hunters/goatman.png";
  document.getElementById("h-occupation").innerHTML = '"Goatman"';
  document.getElementById("h-name").innerHTML = "Name: Jeffrey Bonavita";
  document.getElementById("h-type").innerHTML = "Type: Control";
  document.getElementById("h-weapon").innerHTML = "Weapon: Broken Iron Cage Hook";
  document.getElementById("h-ability").innerHTML = '"Goatman" can create cages that form temporary enclosed areas around the map. Survivors cannot freely cross the cage boundaries, allowing him to restrict their movement and trap them. He can use these areas to control escape routes and continue applying pressure.';
}


document.getElementById("hullabaloo").addEventListener("click", showhullabaloo);
function showhullabaloo() {
  document.getElementById("hunter-image").src = "hunters/hullabaloo.png";
  document.getElementById("h-occupation").innerHTML = '"Hullabaloo"';
  document.getElementById("h-name").innerHTML = "Name: Mike Morton";
  document.getElementById("h-type").innerHTML = "Type: Chase";
  document.getElementById("h-weapon").innerHTML = "Weapon: Nitre Bombs";
  document.getElementById("h-ability").innerHTML = '"Hullabaloo" has three different stage areas around him that apply different Fright Marks when he attacks Survivors. A Survivor takes damage after receiving all three different marks. He can rotate his stage and quickly move around obstacles to apply the marks during a chase.';
}


document.getElementById("peddler").addEventListener("click", showpeddler);
function showpeddler() {
  document.getElementById("hunter-image").src = "hunters/peddler.png";
  document.getElementById("h-occupation").innerHTML = "Peddler";
  document.getElementById("h-name").innerHTML = "Name: Valentina Yaga Vasilieva";
  document.getElementById("h-type").innerHTML = "Type: Control";
  document.getElementById("h-weapon").innerHTML = "Weapon: Antique Brass Hanging Scale";
  document.getElementById("h-ability").innerHTML = "Peddler can absorb different materials from the environment to gain different abilities. She can use vines to catch Survivors, mineral shards to attack and slow them, or metal to strengthen herself against control effects. This allows her to adapt her abilities to different situations around the map.";
}


document.getElementById("cueist").addEventListener("click", showcueist);
function showcueist() {
  document.getElementById("hunter-image").src = "hunters/cueist.png";
  document.getElementById("h-occupation").innerHTML = '"Cueist"';
  document.getElementById("h-name").innerHTML = "Name: Marcus Thorne";
  document.getElementById("h-type").innerHTML = "Type: Chase";
  document.getElementById("h-weapon").innerHTML = "Weapon: Cue Stick";
  document.getElementById("h-ability").innerHTML = '"Cueist" can place Contact Points around the map and connect them to create special paths. He can use these paths to move quickly and gain movement and interaction bonuses after leaving them. This allows him to rapidly approach Survivors and maintain pressure during a chase.';
}


document.getElementById("queenbee").addEventListener("click", showqueenbee);
function showqueenbee() {
  document.getElementById("hunter-image").src = "hunters/queenbee.png";
  document.getElementById("h-occupation").innerHTML = '"Queen Bee"';
  document.getElementById("h-name").innerHTML = "Name: Melly Plinius";
  document.getElementById("h-type").innerHTML = "Type: Chase";
  document.getElementById("h-weapon").innerHTML = "Weapon: Swarm of Insects";
  document.getElementById("h-ability").innerHTML = '"Queen Bee" controls a Swarm of Insects that can chase Survivors and provide her with Energy and movement speed. She can spend Energy to fire Stingers that damage Survivors from a distance. She can also quickly fly to her swarm, allowing her to reposition and continue chasing Survivors.';
}



if (localStorage.getItem("character") == "prodigy") {
  showProdigy();
  localStorage.removeItem("character");
}
