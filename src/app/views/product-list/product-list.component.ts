import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/interfaces/iproduct';
import { DataService } from 'src/app/services/data.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  productList: IProduct[];
pokeFilter = [];


  pokemon = [
    { id: "1", pName: "Pokeball", price: "$200", img: "assets/images/pokeBall.png" },
    { id: "2", pName: "Great Ball", price: "$600", img: "assets/images/greatBall.png" },
{ id: "3", pName: "Ultra Ball", price: "$1,200", img: "assets/images/ultraBall.png" },
{ id: "4", pName: "Premier Ball", price: "$250", img: "assets/images/premierBall.png" },
{ id: "5", pName: "Luxury Ball", price: "$3,000", img: "assets/images/luxuryBall.png" },
{ id: "6", pName: "Master Ball", price: "$250,000", img: "assets/images/masterBall.png" },
{ id: "7", pName: "Quick Ball", price: "$1,000", img: "assets/images/quickBall.png" },
{ id: "8", pName: "Repeat Ball", price: "$1,000", img: "assets/images/repeatBall.png" },
{ id: "9", pName: "Timer Ball", price: "$1,000", img: "assets/images/timerBall.png" },
{ id: "10", pName: "Dusk Ball", price: "$1,000", img: "assets/images/duskBall.png" },
{ id: "11", pName: "Safari Ball", price: "$1,000", img: "assets/images/safariBall.png" },
{ id: "12", pName: "NestBall", price: "$1,000", img: "assets/images/nestBall.png" },
{ id: "13", pName: "Heal Ball", price: "$1,000", img: "assets/images/healBall.png" },
{ id: "14", pName: "Net Ball", price: "$1,000", img: "assets/images/netBall.png" },
{ id: "15", pName: "Dive Ball", price: "$1,000", img: "assets/images/diveBall.png" },
{ id: "16", pName: "Love Ball", price: "$1,000", img: "assets/images/lopveBall.png" },
{ id: "17", pName: "Friend Ball", price: "$1,000", img: "assets/images/friendBall.png" },
{ id: "18", pName: "Sport Ball", price: "$1,000", img: "assets/images/sportBall.png" },
{ id: "19", pName: "Lure Ball", price: "$1,000", img: "assets/images/lureBall.png" },
{ id: "20", pName: "Heavy Ball", price: "$1,000", img: "assets/images/heavyBall.png" },
{ id: "21", pName: "Moon Ball", price: "$1,000", img: "assets/images/moonBall.png" },
{ id: "22", pName: "Park Ball", price: "$1,000", img: "assets/images/parkBall.png" },
{ id: "23", pName: "Fast Ball", price: "$1,000", img: "assets/images/fastBall.png" },
{ id: "24", pName: "Level Ball", price: "$1,000", img: "assets/images/levelBall.png" },
{ id: "25", pName: "Dream Ball", price: "$25,000", img: "assets/images/dreamBall.png" },
{ id: "26", pName: "Cherish Ball", price: "$25,000", img: "assets/images/cherishBall.png" },
{ id: "27", pName: "Beast Ball", price: "$100,000", img: "assets/images/beastBall.png" },
{ id: "28", pName: "Black Apricorn", price: "$500", img: "assets/images/blackApricorn.png" },
{ id: "29", pName: "Blue Apricorn", price: "$500", img: "assets/images/blueApricorn.png" },
{ id: "30", pName: "Grean Apricorn", price: "$500", img: "assets/images/greenApricorn.png" },
{ id: "31", pName: "Light Blue Apricorn", price: "$500", img: "assets/images/lightBlueApricorn.png" },
{ id: "32", pName: "Red Apricorn", price: "$500", img: "assets/images/redApricorn.png" },
{ id: "33", pName: "Orange Apricorn", price: "$500", img: "assets/images/orangeApricorn.png" },
{ id: "34", pName: "Pink Apricorn", price: "$500", img: "assets/images/pinkApricorn.png" },
{ id: "35", pName: "Purple Apricorn", price: "$500", img: "assets/images/purpleApricorn.png" },
{ id: "36", pName: "White Apricorn", price: "$500", img: "assets/images/whiteApricorn.png" },
{ id: "37", pName: "Yellow Apricorn", price: "$500", img: "assets/images/yellowApricorn.png" },
{ id: "38", pName: "Antidote", price: "$200", img: "assets/images/antidote.png" },
{ id: "39", pName: "Awakening", price: "$200", img: "assets/images/awakening.png" },
{ id: "40", pName: "Ice Heal", price: "$200", img: "assets/images/iceHeal.png" },
{ id: "41", pName: "Burn Heal", price: "$200", img: "assets/images/burnHeal.png" },
{ id: "42", pName: "Paralyze Heal", price: "$200", img: "assets/images/paralyzeHeal.png" },
{ id: "43", pName: "Full Heal", price: "$600", img: "assets/images/fullHeal.png" },
{ id: "44", pName: "Lemonade", price: "$350", img: "assets/images/lemonade.png" },
{ id: "45", pName: "Soda Pop", price: "$300", img: "assets/images/sodaPop.png" },
{ id: "46", pName: "Fresh Water", price: "$300", img: "assets/images/freshWater.png" },
{ id: "47", pName: "Moo Moo Milk", price: "$500", img: "assets/images/moomooMilk.png" },
{ id: "48", pName: "Potion", price: "$300", img: "assets/images/potion.png" },
{ id: "49", pName: "Super Potion", price: "$700", img: "assets/images/superPotion.png" },
{ id: "50", pName: "Hyper Potion", price: "$1,500", img: "assets/images/hyperPotion.png" },
{ id: "51", pName: "Max Potion", price: "$2,500", img: "assets/images/maxPotion.png" },
{ id: "52", pName: "Full Restore", price: "$3,000", img: "assets/images/fullRestore.png" },
{ id: "53", pName: "Revive", price: "$2,000", img: "assets/images/revive.png" },
{ id: "54", pName: "Max Revive", price: "$4,000", img: "assets/images/maxRevive.png" },
{ id: "55", pName: "Sacred Ash", price: "$20,000", img: "assets/images/sacredAsh.png" },
{ id: "56", pName: "Energy Powder", price: "$500", img: "assets/images/energyPowder.png" },
{ id: "57", pName: "Heal Powder", price: "$450", img: "assets/images/healPowder.png" },
{ id: "58", pName: "Old Gateau", price: "$350", img: "assets/images/oldGateau.png" },
{ id: "59", pName: "Calcium", price: "$9,800", img: "assets/images/calcium.png" },
{ id: "60", pName: "Carbos", price: "$9,800", img: "assets/images/carbos.png" },
{ id: "61", pName: "HP Up", price: "$9,800", img: "assets/images/hpUp.png" },
{ id: "62", pName: "Iron", price: "$9,800", img: "assets/images/iron.png" },
{ id: "63", pName: "Protein", price: "$9,800", img: "assets/images/protein.png" },
{ id: "64", pName: "Zinc", price: "$9,800", img: "assets/images/zinc.png" },
{ id: "65", pName: "PP Max", price: "$9,800", img: "assets/images/ppMax.png" },
{ id: "66", pName: "PP Up", price: "$9,800", img: "assets/images/ppUp.png" },
{ id: "67", pName: "Dire Hit", price: "$1,000", img: "assets/images/direHit.png" },
{ id: "68", pName: "Guard Spec", price: "$1,500", img: "assets/images/guardSpec.png" },
{ id: "69", pName: "X-Accuracy", price: "$1,000", img: "assets/images/xAccuracy.png" },
{ id: "70", pName: "X-Attack", price: "$1,000", img: "assets/images/xAttack.png" },
{ id: "71", pName: "X-Defense", price: "$1,000", img: "assets/images/xDefense.png" },
{ id: "72", pName: "X-Special Attack", price: "$1,000", img: "assets/images/xSpAtk.png" },
{ id: "73", pName: "X-Special Defense", price: "$1,000", img: "assets/images/xSpDef.png" },
{ id: "74", pName: "X-Speed", price: "$1,000", img: "assets/images/xSpeed.png" },
{ id: "75", pName: "Bike", price: "$1,000,000", img: "assets/images/bike.png" },
{ id: "76", pName: "Escape Rope", price: "$2,000", img: "assets/images/escapeRope.png" },
{ id: "77", pName: "Rare Candy", price: "$50,000", img: "assets/images/rareCandy.png" },
{ id: "78", pName: "Repel", price: "$400", img: "assets/images/repel.png" },
{ id: "79", pName: "Super Repel", price: "$700", img: "assets/images/superRepel.png" },
{ id: "80", pName: "Max Repel", price: "$900", img: "assets/images/maxRepel.png" },
{ id: "81", pName: "Ether", price: "$1,200", img: "assets/images/ether.png" },
{ id: "82", pName: "Max Ether", price: "$2,000", img: "assets/images/maxEther.png" },
{ id: "83", pName: "Elixir", price: "$3,000", img: "assets/images/elixir.png" },
{ id: "84", pName: "Max Elixir", price: "$2,000", img: "assets/images/maxElixir.png" }
  ];

  constructor(private dService: DataService, private cartService: CartService) { }

  ngOnInit() {
    // attach our productList to the array in our Data Service.
    this.productList = this.dService.getProducts();
    this.filerPoke();
  }

  filerPoke() {
    this.pokeFilter = this.pokemon.filter(
      x => Number(x.id) < 40);
  }

  addToCart(item) {
    this.cartService.addItemsToCart(item);
  }
}
