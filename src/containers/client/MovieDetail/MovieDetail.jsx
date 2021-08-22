import React, { useEffect } from 'react';
import { actFetchMovieDetail } from './module/actions';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import Loader from 'components/Loader/Loader';

export default function MovieDetail() {
  const dispatch = useDispatch();
  const { loading, movieDetail } = useSelector(
    state => state.movieDetailReducer
  );
  const { movieId } = useParams();

  useEffect(() => {
    dispatch(actFetchMovieDetail(movieId));
  }, []);

  if (loading) return <Loader />;

  return (
    movieDetail && (
      <div className="container">
        <div className="row">
          <div className="col-6">
            <img
              className="img-fluid"
              src={movieDetail.hinhAnh}
              alt={movieDetail.biDanh}
            />
          </div>
          <div className="col-6">
            <h3>{movieDetail.tenPhim}</h3>
            <p>{movieDetail.moTa}</p>
          </div>
        </div>
        <hr />
        <h2>Showtime Info</h2>
        <div className="container">
          <div className="row">
            <div className="col-3">
              <div
                className="nav flex-column nav-pills text-left"
                id="v-pills-tab"
                role="tablist"
                aria-orientation="vertical"
              >
                {movieDetail.heThongRapChieu?.map((heThongRap, idx) => {
                  return (
                    <a
                      className={`nav-link ${idx === 0 && 'active'}`}
                      id="v-pills-home-tab"
                      data-toggle="pill"
                      href={`#${heThongRap.maHeThongRap}`}
                      role="tab"
                      aria-controls="v-pills-home"
                      aria-selected="true"
                    >
                      <img
                        src={heThongRap.logo}
                        width="40px"
                        className="mr-2"
                      />
                      {heThongRap.tenHeThongRap}
                    </a>
                  );
                })}
              </div>
            </div>
            <div className="col-9">
              <div className="tab-content" id="v-pills-tabContent">
                {movieDetail.heThongRapChieu?.map((heThongRap, idx) => {
                  return (
                    <div
                      className={`tab-pane fade show ${idx === 0 && 'active'}`}
                      id={heThongRap.maHeThongRap}
                      role="tabpanel"
                      aria-labelledby="v-pills-home-tab"
                    >
                      {heThongRap.cumRapChieu.map(cumRap => {
                        return (
                          <div className="text-left">
                            {cumRap.tenCumRap}
                            <div className="row">
                              {cumRap.lichChieuPhim.map(lichChieu => {
                                return (
                                  <div className="col-3">
                                    <Link
                                      to={`/seat-plan/${lichChieu.maLichChieu}`}
                                    >
                                      {new Date(
                                        lichChieu.ngayChieuGioChieu
                                      ).toLocaleTimeString()}
                                    </Link>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
}
