import "./index.css";

const maxCount = 250;

const Rating = () => {
  const items = JSON.parse(localStorage.getItem("users")) || [];
  const sortedItems = items.sort((a, b) => (+a.count < +b.count ? 1 : -1));
  return (
    <div className="rating">
      <div className="list">
        {sortedItems?.map((item) => (
          <div
            className={
              +item.count >= maxCount
                ? "list__item list__item--opacity"
                : "list__item"
            }
            key={item.id}
          >
            {+item.count >= maxCount && (
              <img src="/images/star.svg" className="item__star" alt="" />
            )}
            <div className="item__count">{item?.count || 0}</div>
            <div className="item__number">{item?.id || 0}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rating;
