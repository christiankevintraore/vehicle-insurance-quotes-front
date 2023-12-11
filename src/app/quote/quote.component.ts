import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Quote } from '@app/home/quote.service';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss'],
})
export class QuoteComponent implements OnInit, OnDestroy {
  private sub: any;
  quote: Quote | null;

  constructor(private route: ActivatedRoute) {
    this.quote = null;
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.quote = {...params} as Quote;
      const { id, premium, requestId, status } = this.quote;

      if (!id && !premium && !requestId && !status) {
        this.quote = null;
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
