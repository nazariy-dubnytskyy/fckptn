const generate = (num: number) => Math.random().toString(36).slice(num);

export const run = (img: HTMLImageElement, url: string) => {
  return new Promise((resolve, reject) => {
    img.src = `${url}/${generate(2)}/${generate(2)}.png`;
    img.onload = () => {
      resolve(0);
    };
    img.onerror = () => {
      resolve(0);
    };
  });
};

export class WorkerPool {
  size = 0;
  pool: HTMLImageElement[] = [];
  jobs: any[] = [];
  constructor(size: number) {
    this.size = size || 4;
    this.pool = [];
    this.jobs = [];
    this.fillPool();
  }

  fillPool = () => {
    for (var i = 0; i < this.size; i++) {
      const img = document.createElement('img');
      document.getElementById('body')?.appendChild(img);
      this.pool.push(img);
    }
  };

  process(url: string) {
    this.pool.forEach((thread) => {
      this.next(thread, url);
    });
  }

  next(thread: HTMLImageElement, url: string) {
    run(thread, url).then((res) =>
      setTimeout(() => this.next(thread, url), 100)
    );
  }
}
